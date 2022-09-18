const optimal_allocations = (lab_schedule, assignment_schedule, baseline_join_rate, assignment_join_rate, tutor_service_time, queuelength) => {
    /**
     *  @param {list} lab_schedule List of dates, each corresponds of each lab session 
     *  @param {list} assignment_schedule: A list of dates: the DUE date of each assignment sessions
     *  @param {float} baseline_join_rate: The average number number of students asking questions per minute (with no assignment due nearby)
     *  @param {float} assignment_join_rate: The average number of students asking questions per minute (with an assignment due nearby)
     *  @param {float} tutor_help_rate: The average amount of time it takes to help a student.
     *  @param {float} queuelength: The number of minutes in each lab class.
     */
    
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

    let average_wait = 0;
    for (let student = 0; student < i; student++) {
        if (isNaN(arrival_data[student][5])) {
            break;
        }

        average_wait += arrival_data[student][5];
    }
    average_wait /= i;

    return average_wait;
}


const suboptimal_allocations = (lab_schedule, assignment_schedule, baseline_join_rate, assignment_join_rate, tutor_service_time, number_of_tutors) => {
    /**
     *  @param {list} lab_schedule List of dates, each corresponds of each lab session.
     *  @param {list} assignment_schedule: A list of dates: the DUE date of each assignment sessions.
     *  @param {float} baseline_join_rate: The average number number of students asking questions per minute (with no assignment due nearby).
     *  @param {float} assignment_join_rate: The average number of students asking questions per minute (with an assignment due nearby).
     *  @param {float} tutor_help_rate: The average amount of time it takes to help a student.
     *  @param {int} number_of_tutors: The number of tutors assigned to every class.
     */
}

export default sim;