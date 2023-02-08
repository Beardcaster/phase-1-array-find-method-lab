superbowlWin = (array) =>  {

    const results = array.find((array) => array.results === "W")
    return !!results ? array.year : undefined;

}

superbowlWin = (record) => {
    const result = record.find((record) => record.result === "W");
  
    return !!result ? result.year : undefined;
  };

