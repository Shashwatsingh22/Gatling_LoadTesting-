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
        "total": "1374",
        "ok": "1374",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3955",
        "ok": "3955",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2536",
        "ok": "2536",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1108",
        "ok": "1108",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2345",
        "ok": "2345",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3913",
        "ok": "3913",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3935",
        "ok": "3935",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3947",
        "ok": "3947",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 40,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.714",
        "ok": "5.714",
        "ko": "-"
    }
},
contents: {
"req_update-specific-4c2de": {
        type: "REQUEST",
        name: "Update Specific User By Id",
path: "Update Specific User By Id",
pathFormatted: "req_update-specific-4c2de",
stats: {
    "name": "Update Specific User By Id",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1374",
        "ok": "1374",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1564",
        "ok": "1564",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1464",
        "ok": "1464",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "57",
        "ok": "57",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1473",
        "ok": "1473",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1502",
        "ok": "1502",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1540",
        "ok": "1540",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1559",
        "ok": "1559",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 20,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.857",
        "ok": "2.857",
        "ko": "-"
    }
}
    },"req_update-specific-c340b": {
        type: "REQUEST",
        name: "Update Specific User By Id Redirect 1",
path: "Update Specific User By Id Redirect 1",
pathFormatted: "req_update-specific-c340b",
stats: {
    "name": "Update Specific User By Id Redirect 1",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3126",
        "ok": "3126",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3955",
        "ok": "3955",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3609",
        "ok": "3609",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "388",
        "ok": "388",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3914",
        "ok": "3914",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3931",
        "ok": "3931",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3936",
        "ok": "3936",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3951",
        "ok": "3951",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 20,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.857",
        "ok": "2.857",
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
