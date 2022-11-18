(() => {
  // Meeting Rooms I

  // Given an array of meeting time intervals consisting of start and end times [[s1, e], [s2, e2], ...]
  // determine if a person could attend all meetings.

  // @param {number[][]} intervals
  // @return {boolean}

  function canAttendMeeting(intervals) {
    if (!intervals.length) return 0;
    if (intervals.length < 2) return true;

    intervals.sort((a, b) => a[0] - b[0]);

    let end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
      if (end > intervals[i][0]) return false;
      if (end < intervals[i][1]) end = intervals[i][1]; 
    }

    return true;
  }

  const input = [
    [0, 30],
    [5, 10],
    [15, 20],
  ];
  const input2 = [
    [7, 10],
    [2, 4],
  ];

  console.log("canAttendMeeting => ", canAttendMeeting(input));
  console.log("canAttendMeeting => ", canAttendMeeting(input2));
})();
