var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "236",
        "ok": "236",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "989",
        "ok": "989",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "563",
        "ok": "563",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "204",
        "ok": "204",
        "ko": "-"
    },
    "percentiles1": {
        "total": "524",
        "ok": "524",
        "ko": "-"
    },
    "percentiles2": {
        "total": "797",
        "ok": "797",
        "ko": "-"
    },
    "percentiles3": {
        "total": "861",
        "ok": "861",
        "ko": "-"
    },
    "percentiles4": {
        "total": "943",
        "ok": "943",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 31,
    "percentage": 78
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 23
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20",
        "ok": "20",
        "ko": "-"
    }
},
contents: {
"req_add-user-reques-1aa2d": {
        type: "REQUEST",
        name: "Add User Request",
path: "Add User Request",
pathFormatted: "req_add-user-reques-1aa2d",
stats: {
    "name": "Add User Request",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "236",
        "ok": "236",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "516",
        "ok": "516",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "393",
        "ok": "393",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "percentiles1": {
        "total": "399",
        "ok": "399",
        "ko": "-"
    },
    "percentiles2": {
        "total": "441",
        "ok": "441",
        "ko": "-"
    },
    "percentiles3": {
        "total": "513",
        "ok": "513",
        "ko": "-"
    },
    "percentiles4": {
        "total": "515",
        "ok": "515",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    }
}
    },"req_add-user-reques-72641": {
        type: "REQUEST",
        name: "Add User Request Redirect 1",
path: "Add User Request Redirect 1",
pathFormatted: "req_add-user-reques-72641",
stats: {
    "name": "Add User Request Redirect 1",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "531",
        "ok": "531",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "989",
        "ok": "989",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "733",
        "ok": "733",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "136",
        "ok": "136",
        "ko": "-"
    },
    "percentiles1": {
        "total": "797",
        "ok": "797",
        "ko": "-"
    },
    "percentiles2": {
        "total": "823",
        "ok": "823",
        "ko": "-"
    },
    "percentiles3": {
        "total": "876",
        "ok": "876",
        "ko": "-"
    },
    "percentiles4": {
        "total": "966",
        "ok": "966",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11,
    "percentage": 55
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 45
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
