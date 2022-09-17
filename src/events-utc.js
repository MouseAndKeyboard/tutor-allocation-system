const baseData = [
    {
        "TaskID": 82,
        "OwnerID": 2,
        "Title": "Support Call",
        "Description": "",
        "StartTimezone": null,
        "Start": "2013-06-26T11:30:00.000Z",
        "End": "2013-06-26T12:00:00.000Z",
        "EndTimezone": null,
        "RecurrenceRule": null,
        "RecurrenceID": null,
        "RecurrenceException": null,
        "isAllDay": false
    },
    {
        "TaskID": 83,
        "OwnerID": 3,
        "Title": "Phone Sync with NY office ",
        "Description": "",
        "StartTimezone": null,
        "Start": "2013-06-26T13:30:00.000Z",
        "End": "2013-06-26T14:30:00.000Z",
        "EndTimezone": null,
        "RecurrenceRule": null,
        "RecurrenceID": null,
        "RecurrenceException": null,
        "isAllDay": false
    },
    {
        "TaskID": 84,
        "OwnerID": 3,
        "Title": "Phone Sync with Boston Office",
        "Description": "",
        "StartTimezone": null,
        "Start": "2013-06-26T15:00:00.000Z",
        "End": "2013-06-26T16:00:00.000Z",
        "EndTimezone": null,
        "RecurrenceRule": null,
        "RecurrenceID": null,
        "RecurrenceException": null,
        "isAllDay": false
    },
    {
        "TaskID": 85,
        "OwnerID": 3,
        "Title": "Server maintenance",
        "Description": "",
        "StartTimezone": null,
        "Start": "2013-06-26T18:30:00.000Z",
        "End": "2013-06-26T21:00:00.000Z",
        "EndTimezone": null,
        "RecurrenceRule": null,
        "RecurrenceID": null,
        "RecurrenceException": null,
        "isAllDay": true
    },
];

export const customModelFields = {
    id: 'TaskID',
    title: 'Title',
    description: 'Description',
    start: 'Start',
    end: 'End',
    recurrenceRule: 'RecurrenceRule',
    recurrenceId: 'RecurrenceID',
    recurrenceExceptions: 'RecurrenceException'
};

const currentYear = new Date().getFullYear();
const parseAdjust = (eventDate) => {
    const date = new Date(eventDate);
    date.setFullYear(currentYear);
    return date;
};

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const displayDate = new Date(Date.UTC(currentYear, 5, 24));

export const sampleData = baseData.map(dataItem => (
    {
        id: dataItem.TaskID,
        start: parseAdjust(dataItem.Start),
        startTimezone: dataItem.startTimezone,
        end: parseAdjust(dataItem.End),
        endTimezone: dataItem.endTimezone,
        isAllDay: dataItem.isAllDay,
        title: dataItem.Title,
        description: dataItem.Description,
        recurrenceRule: dataItem.RecurrenceRule,
        recurrenceId: dataItem.RecurrenceID,
        recurrenceExceptions: dataItem.RecurrenceException,

        roomId: dataItem.RoomID,
        ownerID: dataItem.OwnerID,
        personId: dataItem.OwnerID
    }
));

export const sampleDataWithResources = baseData.map(dataItem => (
    {
        id: dataItem.TaskID,
        start: parseAdjust(dataItem.Start),
        startTimezone: dataItem.startTimezone,
        end: parseAdjust(dataItem.End),
        endTimezone: dataItem.endTimezone,
        isAllDay: dataItem.isAllDay,
        title: dataItem.Title,
        description: dataItem.Description,
        recurrenceRule: dataItem.RecurrenceRule,
        recurrenceId: dataItem.RecurrenceID,
        recurrenceExceptions: dataItem.RecurrenceException,
        roomId: randomInt(1, 2),
        personId: randomInt(1, 2)
    }
));

export const sampleDataWithCustomSchema = baseData.map(dataItem => (
    {
        ...dataItem,
        Start: parseAdjust(dataItem.Start),
        End: parseAdjust(dataItem.End),
        PersonIDs: randomInt(1, 2),
        RoomID: randomInt(1, 2)
    }
));