(() => {
  // Meeting Room II

  // Given an array of meeting time intervals consisting of start and end times [[s1, e1,], [s2, e2], ...]
  // find the minimum number of conference rooms required.

  // @param {number[[]]} intervals
  // @return {number}

  function minMeetingRooms(intervals) {
    if (!intervals.length) return 0;
    if (intervals.length < 2) return intervals.length;

    intervals.sort((a, b) => a[0] - b[0]);
    
    const roomTime = [intervals[0][1]];
    
    for (let i = 1; i < intervals.length; i++) {
      const [start, end] = [...intervals[i]];
      const earliest = Math.min(...roomTime);

      if (start < earliest) {
        roomTime.push(end);
      } else {
        console.log("earliest => ", earliest);
        roomTime[roomTime.indexOf(earliest)] = end;
      }
    }

    return roomTime.length;
  }

  const input = [
    [0, 30],
    [5, 10],
    [15, 20],
  ];

  console.log("minMeetingRooms => ", minMeetingRooms(input));
})();
