const optimal_allocations = (num_labs, assignment_schedule, baseline_join_rate, assignment_join_rate, tutor_service_time, queuelength) => {
    /**
     *  @param {float} num_labs number of labs per week 
     *  @param {list} assignment_schedule: list of boolean values, if true then that week has an assignment deadline
     *  @param {float} baseline_join_rate: The average number number of students asking questions per minute (with no assignment due nearby)
     *  @param {float} assignment_join_rate: The average number of students asking questions per minute (with an assignment due nearby)
     *  @param {float} tutor_help_rate: The average amount of time it takes to help a student.
     *  @param {float} queuelength: The number of minutes in each lab class.
     */
    
    const MAX_TUTORS = 7;

    let all_possibilities = []
    for(let tutors = 1; tutors <= MAX_TUTORS; tutors++) {
        let result = monte_carlo(baseline_join_rate, assignment_join_rate, tutor_service_time, tutors, queuelength);
        all_possibilities.push([tutors, result]);
    }

    const cost_per_min_waited = 0.1; // 10 cents per minute
    const cost_per_tutor_per_min = 50/60; // $50 per hour

    // for a non-assignment week, how many tutors should we allocate?
    
    let baseline_min_cost = 9999999999;
    let baseline_tutors = -1;
    let baseline_wait_time = -1;
    all_possibilities.forEach(element => {
        let tutors = element[0];
        let result = element[1];
        let cost = cost_per_min_waited * result['normal_wait_time'] + cost_per_tutor_per_min * tutors * queuelength;
        if (cost < baseline_min_cost) {
            baseline_min_cost = cost;
            baseline_tutors = tutors;
            baseline_wait_time = result['normal_wait_time'];
        }
    });

    // for an assignment week, how many tutors should we allocate?
    let assignment_min_cost = 9999999999;
    let assignment_tutors = -1;
    let assignment_wait_time = -1;
    all_possibilities.forEach(element => {
        let tutors = element[0];
        let result = element[1];
        let cost = cost_per_min_waited * result['assignment_wait_time'] + cost_per_tutor_per_min * tutors * queuelength;
        if (cost < assignment_min_cost) {
            assignment_min_cost = cost;
            assignment_tutors = tutors;
            assignment_wait_time = result['normal_wait_time'];
        }
    });

    let rows = []
    let i = 1;


    assignment_schedule.forEach(hasAssignment => {
        if (hasAssignment) {
            rows.push(
                [i, 
                    hasAssignment, 
                    assignment_tutors, 
                    num_labs, 
                    assignment_wait_time * num_labs, 
                    queuelength * num_labs * assignment_tutors * cost_per_tutor_per_min, 
                    assignment_wait_time * num_labs * cost_per_min_waited]
            );
        } else {
            rows.push(
                [i, 
                    hasAssignment, 
                    baseline_tutors, 
                    num_labs, 
                    baseline_wait_time * num_labs,
                    queuelength * num_labs * baseline_tutors * cost_per_tutor_per_min,
                    baseline_wait_time * num_labs * cost_per_min_waited,
                ]
            );
        }
        
        i++;   
    });
    
    return rows;
}

function expoDistribution (lambda) {
    return -Math.log(1.0 - Math.random()) / lambda;
}

const sim = (join_rate, service_rate, num_servers, queue_time) => {
    const servers = 10;

    let arrival_data = []
    let elapsed_time = 0;
    let i = 0;
    
    let x;
    while(elapsed_time < queue_time){
        x = expoDistribution(join_rate);
        elapsed_time += x;
        arrival_data.push([elapsed_time, expoDistribution(service_rate), null, null, null, null]);
        i += 1;
    }

    let available_server_times = []
    for (let server = 0; server < num_servers; server++) {
        available_server_times.push(0);
    }

    for (let student = 0; student < i; student++) {
        let min_wait = 999999;

        let min_server = -1;
        let wait_time = 0;
        for (let server = 0; server < num_servers; server++) {
            wait_time = available_server_times[server] - arrival_data[student][0];
            if (wait_time < min_wait) {
                min_wait = wait_time;
                min_server = server;
            }
        }

        if (min_wait <= 0) { 
            // student was instantly served
            arrival_data[student][2] = 0;
            arrival_data[student][3] = arrival_data[student][0];
            arrival_data[student][4] = arrival_data[student][0];
            arrival_data[student][5] = 0;
            available_server_times[min_server] += arrival_data[student][1];
        } else {
            // The student took time to be served (had to wait in the queue)
            arrival_data[student][2] = 1;
            arrival_data[student][3] = arrival_data[student][0];
            arrival_data[student][4] = available_server_times[min_server];
            arrival_data[student][5] = available_server_times[min_server] - arrival_data[student][0];
            available_server_times[min_server] += arrival_data[student][1];
        }
    }

    let total_wait = 0;
    for (let student = 0; student < i; student++) {
        if (isNaN(arrival_data[student][5])) {
            break;
        }

        total_wait += arrival_data[student][5];
    }
    const average_wait = total_wait / i;

    return {'avg': average_wait, 'total_wait': total_wait, 'num_students': i};
}

const monte_carlo = (baseline_join_rate, assignment_join_rate, tutor_service_time, number_of_tutors) => {
    const N = 100000;

    let baseline_expected_total_wait_time = 0;
    for (let index = 0; index < N; index++) {
        baseline_expected_total_wait_time += sim(baseline_join_rate, 1/tutor_service_time, number_of_tutors, 120)['total_wait'];   
    }
    baseline_expected_total_wait_time /= N;

    
    let assignment_expected_total_wait_time = 0;
    for (let index = 0; index < N; index++) {
        assignment_expected_total_wait_time += sim(assignment_join_rate, 1/tutor_service_time, number_of_tutors, 120)['total_wait'];   
    }
    assignment_expected_total_wait_time /= N;
   
    return {
        'normal_wait_time': baseline_expected_total_wait_time,
        'assignment_wait_time': assignment_expected_total_wait_time,
    }
}

const suboptimal_allocations = (lab_schedule, assignment_schedule, baseline_join_rate, assignment_join_rate, tutor_service_time, number_of_tutors) => {
    /**
     *  @param {list} lab_schedule List of days of the week, each corresponds of each lab session.
     *  @param {list} assignment_schedule: A list of dates: the DUE date of each assignment sessions.
     *  @param {float} baseline_join_rate: The average number number of students asking questions per minute (with no assignment due nearby).
     *  @param {float} assignment_join_rate: The average number of students asking questions per minute (with an assignment due nearby).
     *  @param {float} tutor_help_rate: The average amount of time it takes to help a student.
     *  @param {int} number_of_tutors: The number of tutors assigned to every class.
     */
    const N = 100000;

    let baseline_expected_total_wait_time = 0;
    for (let index = 0; index < N; index++) {
        baseline_expected_total_wait_time += sim(baseline_join_rate, 1/tutor_service_time, number_of_tutors, 120)['total_wait'];   
    }
    baseline_expected_total_wait_time /= N;

    
    let assignment_expected_total_wait_time = 0;
    for (let index = 0; index < N; index++) {
        assignment_expected_total_wait_time += sim(assignment_join_rate, 1/tutor_service_time, number_of_tutors, 120)['total_wait'];   
    }
    assignment_expected_total_wait_time /= N;
    
    return {
        'normal_wait_time': baseline_expected_total_wait_time,
        'assignment_wait_time': assignment_expected_total_wait_time,
        'tutor_allocations': Array(12).fill(number_of_tutors)
    };
}

export default optimal_allocations;