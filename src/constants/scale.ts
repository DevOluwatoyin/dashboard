export const scaleValues: GraphScale[] = [
  { scale: "01" },
  { scale: "05" },
  { scale: "10" },
  { scale: "15" },
  { scale: "20" },
  { scale: "30" },
];

export const graphDataLists: GraphData[] = [
  {
    day: "Mon",
    views: [
      {
        category: "Recruiters",
        color: "#E4ECF7",
        value: 13,
      },
      {
        category: "Users",
        color: "#4C6FFF",
        value: 18,
      },
      {
        category: "Incognito",
        color: "#FF92AE",
        value: 16,
      },
    ],
  },
  {
    day: "Tue",
    views: [
      {
        category: "Recruiters",
        color: "#E4ECF7",
        value: 6,
      },
      {
        category: "Users",
        color: "#4C6FFF",
        value: 11,
      },
      {
        category: "Incognito",
        color: "#FF92AE",
        value: 9,
      },
    ],
  },
  {
    day: "Wed",
    views: [
      {
        category: "Recruiters",
        color: "#E4ECF7",
        value: 2,
      },
      {
        category: "Users",
        color: "#4C6FFF",
        value: 7,
      },
      {
        category: "Incognito",
        color: "#FF92AE",
        value: 4.5,
      },
    ],
  },
  {
    day: "Thr",
    views: [
      {
        category: "Recruiters",
        color: "#E4ECF7",
        value: 5,
      },
      {
        category: "Users",
        color: "#4C6FFF",
        value: 11,
      },
      {
        category: "Incognito",
        color: "#FF92AE",
        value: 9,
      },
    ],
  },
  {
    day: "Fri",
    views: [
      {
        category: "Recruiters",
        color: "#E4ECF7",
        value: 13,
      },
      {
        category: "Users",
        color: "#4C6FFF",
        value: 18,
      },
      {
        category: "Incognito",
        color: "#FF92AE",
        value: 16,
      },
    ],
  },
  {
    day: "Sat",
    views: [
      {
        category: "Recruiters",
        color: "#E4ECF7",
        value: 5,
      },
      {
        category: "Users",
        color: "#4C6FFF",
        value: 11,
      },
      {
        category: "Incognito",
        color: "#FF92AE",
        value: 9,
      },
    ],
  },
  {
    day: "Sun",
    views: [
      {
        category: "Recruiters",
        color: "#E4ECF7",
        value: 2,
      },
      {
        category: "Users",
        color: "#4C6FFF",
        value: 7,
      },
      {
        category: "Incognito",
        color: "#FF92AE",
        value: 4.5,
      },
    ],
  },
];

export function getYScales(graphData: GraphData[]): YScaleData {
  const Y_SCALE_DIVISIONS = 5;

  const values = graphData.map((item) => {
    return item.views.map((each) => each.value);
  });

  const valuesArr = values.flat();
  const maxValue = Math.max(...valuesArr);

  const maxScaleValue =
    (Math.ceil(maxValue / Y_SCALE_DIVISIONS) + 1) * Y_SCALE_DIVISIONS; //added 1 for additional space at the top of the chart

  const scaleValues: GraphScale[] = [];

  const YScaleStep = maxScaleValue / Y_SCALE_DIVISIONS;

  const YScaleInitialValue = 0;

  for (let i = 0; i < Y_SCALE_DIVISIONS + 1; i++) {
    scaleValues.push({
      scale: String(YScaleInitialValue + i * YScaleStep).padStart(2, "0"),
    });
  }

  return { scaleValues, maxScaleValue };
}

export const getViewsData = (graphData: GraphData[]) => {
  const values = graphData.map((item) => {
    return item.views.map((each) => ({}));
  });
};

