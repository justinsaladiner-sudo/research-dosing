window.RDS_COMPOUNDS = [
 {
  "slug": "glp3-r",
  "name": "Retatrutide",
  "siteName": "GLP3-R",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 1
   },
   {
    "mg": 30,
    "ml": 2.5
   },
   {
    "mg": 40,
    "ml": 2.5
   },
   {
    "mg": 60,
    "ml": 2.5
   },
   {
    "mg": 120,
    "ml": 5
   }
  ],
  "primaryVial": 1,
  "intervalDays": 7,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "study",
    "label": "Trial ladder 2→4→8→12 mg (phase 2, grade B)",
    "steps": [
     {
      "dose": 2,
      "weeks": 4
     },
     {
      "dose": 4,
      "weeks": 4
     },
     {
      "dose": 8,
      "weeks": 4
     },
     {
      "dose": 12,
      "weeks": null
     }
    ],
    "note": "Phase 2 12-mg arm: 4-week steps. Phase 3 maintenance doses were 4, 9 or 12 mg; edit the last step to match."
   },
   {
    "id": "catalog-naive",
    "label": "Catalog start, GLP-naive: 2 mg (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": null
     }
    ],
    "note": "The catalog gives a starting dose only, with no escalation rule. Add steps yourself."
   },
   {
    "id": "catalog-exp",
    "label": "Catalog start, GLP-experienced: 4 mg (grade E)",
    "steps": [
     {
      "dose": 4,
      "weeks": null
     }
    ],
    "note": "Phase 2 found more GI events with a 4 mg start than with 2 mg."
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "Catalog suggests an optional ≈4 months on / 4 off (≈120 / 120 days). No trial basis. 0 = continuous."
  },
  "cycleOptions": [],
  "suggest": [
   "seed-creatine",
   "seed-magnesium"
  ]
 },
 {
  "slug": "glp1-s",
  "name": "Semaglutide",
  "siteName": "GLP1-S",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 5,
    "ml": 1
   },
   {
    "mg": 10,
    "ml": 2
   }
  ],
  "primaryVial": 0,
  "intervalDays": 7,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "label",
    "label": "Label ladder 0.25→2.4 mg (Wegovy, grade A)",
    "steps": [
     {
      "dose": 0.25,
      "weeks": 4
     },
     {
      "dose": 0.5,
      "weeks": 4
     },
     {
      "dose": 1,
      "weeks": 4
     },
     {
      "dose": 1.7,
      "weeks": 4
     },
     {
      "dose": 2.4,
      "weeks": null
     }
    ],
    "note": "4-week steps. Hold a step longer if GI effects are a problem."
   },
   {
    "id": "catalog",
    "label": "Catalog start 0.25 mg (grade E)",
    "steps": [
     {
      "dose": 0.25,
      "weeks": null
     }
    ],
    "note": "The catalog lists 0.25–2.5 mg with ≥4 weeks per dose. Add steps yourself."
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "No cycle documented by the catalog or the label. 0 = continuous."
  },
  "cycleOptions": [],
  "suggest": [
   "seed-creatine",
   "seed-magnesium"
  ]
 },
 {
  "slug": "glp2-t",
  "name": "Tirzepatide",
  "siteName": "GLP2-T",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 0.5
   },
   {
    "mg": 30,
    "ml": 1.5
   },
   {
    "mg": 60,
    "ml": 2.5
   }
  ],
  "primaryVial": 1,
  "intervalDays": 7,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "label",
    "label": "Label ladder 2.5→15 mg (Zepbound, grade A)",
    "steps": [
     {
      "dose": 2.5,
      "weeks": 4
     },
     {
      "dose": 5,
      "weeks": 4
     },
     {
      "dose": 7.5,
      "weeks": 4
     },
     {
      "dose": 10,
      "weeks": 4
     },
     {
      "dose": 12.5,
      "weeks": 4
     },
     {
      "dose": 15,
      "weeks": null
     }
    ],
    "note": "Stop the ladder at the dose you want to maintain (5, 10 or 15 mg); edit the last step."
   },
   {
    "id": "label-5",
    "label": "Label ladder to 5 mg maintenance (grade A)",
    "steps": [
     {
      "dose": 2.5,
      "weeks": 4
     },
     {
      "dose": 5,
      "weeks": null
     }
    ]
   },
   {
    "id": "catalog-exp",
    "label": "Catalog start, GLP-experienced: 5 mg (grade E)",
    "steps": [
     {
      "dose": 5,
      "weeks": null
     }
    ],
    "note": "The label starts everyone at 2.5 mg."
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "No cycle documented. 0 = continuous."
  },
  "cycleOptions": [],
  "suggest": [
   "seed-creatine",
   "seed-magnesium"
  ]
 },
 {
  "slug": "cagrilinitide",
  "name": "Cagrilintide",
  "siteName": "Cagrilinitide",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 2
   }
  ],
  "primaryVial": 0,
  "intervalDays": 7,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog weekly ladder to 2.7 mg (grade E)",
    "steps": [
     {
      "dose": 0.2,
      "weeks": 1
     },
     {
      "dose": 0.4,
      "weeks": 1
     },
     {
      "dose": 0.75,
      "weeks": 1
     },
     {
      "dose": 1.2,
      "weeks": 1
     },
     {
      "dose": 1.7,
      "weeks": 1
     },
     {
      "dose": 2.2,
      "weeks": 1
     },
     {
      "dose": 2.7,
      "weeks": 2
     }
    ],
    "note": "Much faster than the trials (16 weeks to 2.4 mg in REDEFINE 1)."
   },
   {
    "id": "slow",
    "label": "16-week ladder to 2.4 mg (steps assumed, grade E)",
    "steps": [
     {
      "dose": 0.25,
      "weeks": 4
     },
     {
      "dose": 0.5,
      "weeks": 4
     },
     {
      "dose": 1,
      "weeks": 4
     },
     {
      "dose": 1.7,
      "weeks": 4
     },
     {
      "dose": 2.4,
      "weeks": null
     }
    ],
    "note": "The 16-week length and the 2.4 mg target come from REDEFINE 1. The step doses are an assumption mirroring semaglutide's ladder; they aren't confirmed."
   }
  ],
  "cycle": {
   "on": 56,
   "off": 42,
   "note": "Catalog: 8 weeks on, 4–8 weeks off (56 / 28–56 days). No trial basis."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 42,
    "label": "8 wk on / 6 wk off (default)"
   },
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (short)"
   },
   {
    "on": 56,
    "off": 56,
    "label": "8 wk on / 8 wk off (long)"
   }
  ],
  "suggest": [
   "seed-creatine"
  ]
 },
 {
  "slug": "mazdutide",
  "name": "Mazdutide",
  "siteName": "Mazdutide",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 7,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog ladder 2→3→4.5→6 mg (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": 4
     },
     {
      "dose": 3,
      "weeks": 4
     },
     {
      "dose": 4.5,
      "weeks": 4
     },
     {
      "dose": 6,
      "weeks": null
     }
    ],
    "note": "GLORY-1 maintenance doses were 4 and 6 mg."
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "No cycle documented. 0 = continuous."
  },
  "cycleOptions": [],
  "suggest": [
   "seed-creatine"
  ]
 },
 {
  "slug": "survodutide",
  "name": "Survodutide",
  "siteName": "Survodutide",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 1.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 7,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog ladder 1.6→4.8 mg, 0.8 mg steps (grade E)",
    "steps": [
     {
      "dose": 1.6,
      "weeks": 4
     },
     {
      "dose": 2.4,
      "weeks": 4
     },
     {
      "dose": 3.2,
      "weeks": 4
     },
     {
      "dose": 4,
      "weeks": 4
     },
     {
      "dose": 4.8,
      "weeks": null
     }
    ],
    "note": "Phase 3 maintenance doses are 3.6 and 6.0 mg; edit the last step to match."
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "No cycle documented. 0 = continuous."
  },
  "cycleOptions": [],
  "suggest": [
   "seed-creatine"
  ]
 },
 {
  "slug": "aod-9604",
  "name": "AOD-9604",
  "siteName": "AOD-9604",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 5,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 30,
  "templates": [
   {
    "id": "fatloss",
    "label": "Catalog fat-loss: 250 mcg × 2/day, 90 on / 30 off (grade E)",
    "steps": [
     {
      "dose": 0.25,
      "weeks": null
     }
    ],
    "perDay": 2,
    "note": "Set the cycle to 90 / 30 days. Phase 2b showed no weight-loss benefit."
   },
   {
    "id": "standard",
    "label": "Catalog standard: 300 mcg daily, 20 on / 10 off (grade E)",
    "steps": [
     {
      "dose": 0.3,
      "weeks": null
     }
    ]
   }
  ],
  "cycle": {
   "on": 20,
   "off": 10,
   "note": "Catalog: 20 on / 10 off (standard) or 90 on / 30 off (fat loss), in days."
  },
  "cycleOptions": [
   {
    "on": 20,
    "off": 10,
    "label": "20 d on / 10 d off (standard · default)"
   },
   {
    "on": 90,
    "off": 30,
    "label": "90 d on / 30 d off (fat loss)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "5-amino-1mq",
  "name": "5-Amino-1MQ",
  "siteName": "5-Amino-1MQ",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 2
   },
   {
    "mg": 50,
    "ml": 3
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog 1 mg/day ×4 wk → 2 mg/day ×4 wk (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 4
     },
     {
      "dose": 2,
      "weeks": 4
     }
    ]
   },
   {
    "id": "catalog-low",
    "label": "Catalog 1 mg/day for the cycle (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 8
     }
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 21,
   "note": "Catalog: 4–8 weeks on, 2–4 weeks off (28–56 / 14–28 days)."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 21,
    "label": "8 wk on / 3 wk off (default)"
   },
   {
    "on": 28,
    "off": 14,
    "label": "4 wk on / 2 wk off (short)"
   },
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (long)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "slu-pp-332",
  "name": "SLU-PP-332",
  "siteName": "SLU-PP-332",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog 1.25 → 2.5 mg/day (grade E)",
    "steps": [
     {
      "dose": 1.25,
      "weeks": 4
     },
     {
      "dose": 2.5,
      "weeks": 4
     }
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 28,
   "note": "Catalog: 8–16 weeks on, 4–8 weeks off (56–112 / 28–56 days)."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (default)"
   },
   {
    "on": 112,
    "off": 56,
    "label": "16 wk on / 8 wk off (long)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "adipotide",
  "name": "Adipotide",
  "siteName": "Adipotide",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog 28-day ladder (grade E)",
    "steps": [
     {
      "dose": 0.33,
      "weeks": 1
     },
     {
      "dose": 0.55,
      "weeks": 1
     },
     {
      "dose": 1,
      "weeks": 2
     }
    ],
    "note": "The catalog skips day 8. This template assigns it to 0.55 mg."
   }
  ],
  "cycle": {
   "on": 28,
   "off": 28,
   "note": "Catalog: 28 days on, 12–28 days off."
  },
  "cycleOptions": [
   {
    "on": 28,
    "off": 28,
    "label": "4 wk on / 4 wk off (default)"
   },
   {
    "on": 28,
    "off": 12,
    "label": "4 wk on / 12 d off (short)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "tesamorelin",
  "name": "Tesamorelin",
  "siteName": "Tesamorelin",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 3
   },
   {
    "mg": 20,
    "ml": 5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "label",
    "label": "Label: 1.28 mg daily (Egrifta WR, grade A)",
    "steps": [
     {
      "dose": 1.28,
      "weeks": null
     }
    ]
   },
   {
    "id": "catalog-1",
    "label": "Catalog: 1 mg, Mon–Fri (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": null
     }
    ],
    "weekdays": [
     1,
     2,
     3,
     4,
     5
    ]
   },
   {
    "id": "catalog-2",
    "label": "Catalog: 2 mg, Mon–Fri (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": null
     }
    ],
    "weekdays": [
     1,
     2,
     3,
     4,
     5
    ]
   }
  ],
  "cycle": {
   "on": 112,
   "off": 56,
   "note": "Catalog: 12–16 weeks on, 4–8 weeks off (84–112 / 28–56 days). The label has no cycling."
  },
  "cycleOptions": [
   {
    "on": 112,
    "off": 56,
    "label": "16 wk on / 8 wk off (default)"
   },
   {
    "on": 84,
    "off": 28,
    "label": "12 wk on / 4 wk off (short)"
   }
  ],
  "suggest": [
   "seed-creatine"
  ]
 },
 {
  "slug": "sermorelin",
  "name": "Sermorelin",
  "siteName": "Sermorelin",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 5,
    "ml": 2.5
   },
   {
    "mg": 10,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog ladder 200→500 mcg nightly (grade E)",
    "steps": [
     {
      "dose": 0.2,
      "weeks": 4
     },
     {
      "dose": 0.3,
      "weeks": 4
     },
     {
      "dose": 0.4,
      "weeks": 4
     },
     {
      "dose": 0.5,
      "weeks": 4
     }
    ]
   }
  ],
  "cycle": {
   "on": 112,
   "off": 56,
   "note": "Catalog: 12–16 weeks on, 6–8 weeks off."
  },
  "cycleOptions": [
   {
    "on": 112,
    "off": 56,
    "label": "16 wk on / 8 wk off (default)"
   },
   {
    "on": 84,
    "off": 42,
    "label": "12 wk on / 6 wk off (short)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "cjc-no-dac",
  "name": "CJC-1295 (no DAC)",
  "siteName": "CJC No DAC",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog-1x",
    "label": "Catalog 1×/day: 100 → 150 mcg (grade E)",
    "steps": [
     {
      "dose": 0.1,
      "weeks": 4
     },
     {
      "dose": 0.15,
      "weeks": 8
     }
    ]
   },
   {
    "id": "catalog-2x",
    "label": "Catalog 2×/day: 100 → 200 → 300 mcg (grade E)",
    "steps": [
     {
      "dose": 0.1,
      "weeks": 1
     },
     {
      "dose": 0.2,
      "weeks": 3
     },
     {
      "dose": 0.3,
      "weeks": 4
     }
    ],
    "perDay": 2
   }
  ],
  "cycle": {
   "on": 84,
   "off": 56,
   "note": "Catalog: 12 weeks on, 6–12 weeks off."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 56,
    "label": "12 wk on / 8 wk off (default)"
   },
   {
    "on": 84,
    "off": 42,
    "label": "12 wk on / 6 wk off (short)"
   },
   {
    "on": 84,
    "off": 84,
    "label": "12 wk on / 12 wk off (long)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "ipamorelin",
  "name": "Ipamorelin",
  "siteName": "Ipamorelin",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog-1x",
    "label": "Catalog: 100 mcg at bedtime (grade E)",
    "steps": [
     {
      "dose": 0.1,
      "weeks": 12
     }
    ]
   },
   {
    "id": "catalog-2x",
    "label": "Catalog: 200 mcg twice daily (grade E)",
    "steps": [
     {
      "dose": 0.2,
      "weeks": 12
     }
    ],
    "perDay": 2
   }
  ],
  "cycle": {
   "on": 84,
   "off": 35,
   "note": "Catalog: 8–12 weeks on, 4–6 weeks off."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 35,
    "label": "12 wk on / 5 wk off (default)"
   },
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (short)"
   },
   {
    "on": 84,
    "off": 42,
    "label": "12 wk on / 6 wk off (long)"
   }
  ],
  "suggest": [
   "seed-creatine"
  ]
 },
 {
  "slug": "ghrp-2",
  "name": "GHRP-2",
  "siteName": "GHRP-2",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 3
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 150 mcg at bedtime (grade E)",
    "steps": [
     {
      "dose": 0.15,
      "weeks": 12
     }
    ]
   }
  ],
  "cycle": {
   "on": 84,
   "off": 28,
   "note": "Catalog: 8–12 weeks on, 4 weeks off."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 28,
    "label": "12 wk on / 4 wk off (default)"
   },
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (short)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "ghrp-6",
  "name": "GHRP-6",
  "siteName": "GHRP-6",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 3
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 100 mcg twice daily (grade E)",
    "steps": [
     {
      "dose": 0.1,
      "weeks": 12
     }
    ],
    "perDay": 2
   }
  ],
  "cycle": {
   "on": 84,
   "off": 21,
   "note": "Catalog: 6–12 weeks on, 2–4 weeks off."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 21,
    "label": "12 wk on / 3 wk off (default)"
   },
   {
    "on": 42,
    "off": 14,
    "label": "6 wk on / 2 wk off (short)"
   },
   {
    "on": 84,
    "off": 28,
    "label": "12 wk on / 4 wk off (long)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "igf1-lr3",
  "name": "IGF-1 LR3",
  "siteName": "IGF-1 LR3",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 1,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog 8-week ladder 33→100 mcg (grade E)",
    "steps": [
     {
      "dose": 0.033,
      "weeks": 1
     },
     {
      "dose": 0.05,
      "weeks": 1
     },
     {
      "dose": 0.075,
      "weeks": 2
     },
     {
      "dose": 0.1,
      "weeks": 4
     }
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 42,
   "note": "Catalog: 8 weeks on, 4–8 weeks off."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 42,
    "label": "8 wk on / 6 wk off (default)"
   },
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (short)"
   },
   {
    "on": 56,
    "off": 56,
    "label": "8 wk on / 8 wk off (long)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "hcg",
  "name": "hCG",
  "siteName": "HCG",
  "route": "Injectable",
  "unit": "IU",
  "vials": [
   {
    "mg": 1000,
    "ml": 1
   },
   {
    "mg": 5000,
    "ml": 2
   }
  ],
  "primaryVial": 1,
  "intervalDays": 2,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "coviello",
    "label": "250 IU every other day (Coviello 2005, grade B)",
    "steps": [
     {
      "dose": 250,
      "weeks": null
     }
    ],
    "note": "Set 'Every 2 days'."
   },
   {
    "id": "catalog-low",
    "label": "Catalog low dose: 250 IU Mon/Wed/Fri (grade E)",
    "steps": [
     {
      "dose": 250,
      "weeks": null
     }
    ],
    "weekdays": [
     1,
     3,
     5
    ]
   },
   {
    "id": "catalog-std",
    "label": "Catalog standard: 500 IU Mon/Wed/Fri × 12 wk (grade E)",
    "steps": [
     {
      "dose": 500,
      "weeks": 12
     }
    ],
    "weekdays": [
     1,
     3,
     5
    ]
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "Catalog: 8–16 weeks on, 8–16 off for the standard protocol; low dose 'depends on application'."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 56,
    "label": "8 wk on / 8 wk off (short)"
   },
   {
    "on": 112,
    "off": 112,
    "label": "16 wk on / 16 wk off (long)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "kisspeptin",
  "name": "Kisspeptin",
  "siteName": "Kisspeptin",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 5,
    "ml": 1.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 2,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 200 mcg every other day (grade E)",
    "steps": [
     {
      "dose": 0.2,
      "weeks": null
     }
    ],
    "note": "Set 'Every 2 days'."
   },
   {
    "id": "catalog-2x",
    "label": "Catalog alternative: 200 mcg Mon/Thu (grade E)",
    "steps": [
     {
      "dose": 0.2,
      "weeks": null
     }
    ],
    "weekdays": [
     1,
     4
    ]
   }
  ],
  "cycle": {
   "on": 28,
   "off": 28,
   "note": "Catalog: 4 weeks on, 4 weeks off."
  },
  "cycleOptions": [
   {
    "on": 28,
    "off": 28,
    "label": "4 wk on / 4 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "oxytocin",
  "name": "Oxytocin",
  "siteName": "Oxytocin",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 100 mcg daily (grade E)",
    "steps": [
     {
      "dose": 0.1,
      "weeks": 8
     }
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 28,
   "note": "Catalog: 8 weeks on, 4 weeks off."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "b12",
  "name": "Vitamin B12",
  "siteName": "B12",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 7,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 5,000 mcg weekly × 4 wk (grade E)",
    "steps": [
     {
      "dose": 5,
      "weeks": 4
     }
    ],
    "note": "Then add a monthly maintenance protocol."
   },
   {
    "id": "label",
    "label": "Label maintenance: 100 mcg monthly (grade A)",
    "steps": [
     {
      "dose": 0.1,
      "weeks": null
     }
    ],
    "note": "Set 'Every 30 days'."
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "No cycle."
  },
  "cycleOptions": [],
  "suggest": []
 },
 {
  "slug": "glutathione",
  "name": "Glutathione",
  "siteName": "Glutathione",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 1500,
    "ml": 7
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 100 mg Mon–Sat × 4 wk (grade E)",
    "steps": [
     {
      "dose": 100,
      "weeks": 4
     }
    ],
    "weekdays": [
     1,
     2,
     3,
     4,
     5,
     6
    ]
   }
  ],
  "cycle": {
   "on": 28,
   "off": 28,
   "note": "Catalog: 4 weeks on, 4 weeks off."
  },
  "cycleOptions": [
   {
    "on": 28,
    "off": 28,
    "label": "4 wk on / 4 wk off (default)"
   }
  ],
  "suggest": [
   "glynac"
  ]
 },
 {
  "slug": "l-carnitine",
  "name": "L-Carnitine",
  "siteName": "L-Carnitine",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 500,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog 12-week ladder 50→200 mg (grade E)",
    "steps": [
     {
      "dose": 50,
      "weeks": 2
     },
     {
      "dose": 100,
      "weeks": 6
     },
     {
      "dose": 150,
      "weeks": 4
     }
    ]
   }
  ],
  "cycle": {
   "on": 84,
   "off": 63,
   "note": "Catalog: 12 weeks on, 6–12 weeks off."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 63,
    "label": "12 wk on / 9 wk off (default)"
   },
   {
    "on": 84,
    "off": 42,
    "label": "12 wk on / 6 wk off (short)"
   },
   {
    "on": 84,
    "off": 84,
    "label": "12 wk on / 12 wk off (long)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "mots-c",
  "name": "MOTS-c",
  "siteName": "MOTS-C",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 1.5
   },
   {
    "mg": 10,
    "ml": 2
   },
   {
    "mg": 20,
    "ml": 3
   },
   {
    "mg": 40,
    "ml": 5
   }
  ],
  "primaryVial": 2,
  "intervalDays": 5,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog-5",
    "label": "Catalog: 5 mg every 5 days (grade E)",
    "steps": [
     {
      "dose": 5,
      "weeks": 10
     }
    ],
    "note": "Set 'Every 5 days'."
   },
   {
    "id": "catalog-3",
    "label": "Catalog: 3 mg every 3 days (grade E)",
    "steps": [
     {
      "dose": 3,
      "weeks": 10
     }
    ],
    "note": "Set 'Every 3 days'."
   }
  ],
  "cycle": {
   "on": 70,
   "off": 35,
   "note": "Catalog: 8–10 weeks on, 4–5 weeks off."
  },
  "cycleOptions": [
   {
    "on": 70,
    "off": 35,
    "label": "10 wk on / 5 wk off (default)"
   },
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (short)"
   }
  ],
  "suggest": [
   "seed-alcar"
  ]
 },
 {
  "slug": "nad",
  "name": "NAD+",
  "siteName": "NAD: Buffered & Unbuffered",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 500,
    "ml": 2.5
   },
   {
    "mg": 1000,
    "ml": 5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 2,
  "useWithinDays": 30,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog ladder (grade E)",
    "steps": [
     {
      "dose": 25,
      "weeks": 1
     },
     {
      "dose": 50,
      "weeks": 5
     },
     {
      "dose": 100,
      "weeks": 6
     }
    ],
    "weekdays": [
     1,
     4
    ],
    "note": "The catalog moves to 4×/week from week 3: change the days then."
   }
  ],
  "cycle": {
   "on": 84,
   "off": 35,
   "note": "Catalog: up to 12 weeks on, 4–6 weeks off."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 35,
    "label": "12 wk on / 5 wk off (default)"
   },
   {
    "on": 84,
    "off": 28,
    "label": "12 wk on / 4 wk off (short)"
   },
   {
    "on": 84,
    "off": 42,
    "label": "12 wk on / 6 wk off (long)"
   }
  ],
  "suggest": [
   "nr-precursor"
  ]
 },
 {
  "slug": "ss-31",
  "name": "SS-31 (Elamipretide)",
  "siteName": "SS-31",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 1
   },
   {
    "mg": 30,
    "ml": 2
   },
   {
    "mg": 50,
    "ml": 3
   }
  ],
  "primaryVial": 1,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog-std",
    "label": "Catalog standard: 5 mg Mon–Fri (grade E)",
    "steps": [
     {
      "dose": 5,
      "weeks": 12
     }
    ],
    "weekdays": [
     1,
     2,
     3,
     4,
     5
    ]
   },
   {
    "id": "catalog-preload",
    "label": "Catalog MOTS-c pre-load: 1 mg daily × 2 wk (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 2
     }
    ]
   }
  ],
  "cycle": {
   "on": 84,
   "off": 42,
   "note": "Catalog: 8–12 weeks on, 4–8 weeks off."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 42,
    "label": "12 wk on / 6 wk off (default)"
   },
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (short)"
   },
   {
    "on": 84,
    "off": 56,
    "label": "12 wk on / 8 wk off (long)"
   }
  ],
  "suggest": [
   "seed-alcar"
  ]
 },
 {
  "slug": "ara-290",
  "name": "ARA-290 (Cibinetide)",
  "siteName": "ARA-290",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 16,
    "ml": 1.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "study",
    "label": "Trial course: 4 mg daily × 28 days (grade B)",
    "steps": [
     {
      "dose": 4,
      "weeks": 4
     }
    ]
   },
   {
    "id": "catalog-2",
    "label": "Catalog: 2 mg daily × 8 wk (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": 8
     }
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 28,
   "note": "Catalog: 4/8/12 weeks on, 2/4/6 weeks off."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (default)"
   },
   {
    "on": 28,
    "off": 14,
    "label": "4 wk on / 2 wk off"
   },
   {
    "on": 84,
    "off": 42,
    "label": "12 wk on / 6 wk off"
   }
  ],
  "suggest": [
   "seed-benfotiamine",
   "seed-alcar",
   "seed-b12"
  ]
 },
 {
  "slug": "fox04-dri",
  "name": "FOXO4-DRI",
  "siteName": "Fox04-DRI",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 3
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog 16-week ladder (grade E)",
    "steps": [
     {
      "dose": 0.25,
      "weeks": 4
     },
     {
      "dose": 0.375,
      "weeks": 4
     },
     {
      "dose": 0.5,
      "weeks": 8
     }
    ]
   }
  ],
  "cycle": {
   "on": 112,
   "off": 42,
   "note": "Catalog: 8–16 weeks on, 4–8 weeks off."
  },
  "cycleOptions": [
   {
    "on": 112,
    "off": 42,
    "label": "16 wk on / 6 wk off (default)"
   },
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (short)"
   },
   {
    "on": 112,
    "off": 56,
    "label": "16 wk on / 8 wk off (long)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "ll-37",
  "name": "LL-37",
  "siteName": "LL-37",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 5,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog 12-week ladder (grade E)",
    "steps": [
     {
      "dose": 0.05,
      "weeks": 1
     },
     {
      "dose": 0.1,
      "weeks": 1
     },
     {
      "dose": 0.15,
      "weeks": 1
     },
     {
      "dose": 0.2,
      "weeks": 1
     },
     {
      "dose": 0.3,
      "weeks": 1
     },
     {
      "dose": 0.35,
      "weeks": 1
     },
     {
      "dose": 0.4,
      "weeks": 1
     },
     {
      "dose": 0.45,
      "weeks": 5
     }
    ],
    "note": "Units are computed from the stated mcg, not the catalog's printed units."
   }
  ],
  "cycle": {
   "on": 84,
   "off": 42,
   "note": "Catalog: 8–12 weeks on, 4–8 weeks off."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 42,
    "label": "12 wk on / 6 wk off (default)"
   },
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (short)"
   },
   {
    "on": 84,
    "off": 56,
    "label": "12 wk on / 8 wk off (long)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "melanotan",
  "name": "Melanotan II",
  "siteName": "Melanotan 2- MT2",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog loading ladder (grade E)",
    "steps": [
     {
      "dose": 0.25,
      "weeks": 1
     },
     {
      "dose": 0.5,
      "weeks": 1
     },
     {
      "dose": 0.75,
      "weeks": 1
     },
     {
      "dose": 1,
      "weeks": 5
     }
    ],
    "note": "Units are computed from the stated mcg."
   }
  ],
  "cycle": {
   "on": 112,
   "off": 84,
   "note": "Catalog: 8–16 weeks on, 8–16 weeks off."
  },
  "cycleOptions": [
   {
    "on": 112,
    "off": 84,
    "label": "16 wk on / 12 wk off (default)"
   },
   {
    "on": 56,
    "off": 56,
    "label": "8 wk on / 8 wk off (short)"
   },
   {
    "on": 112,
    "off": 112,
    "label": "16 wk on / 16 wk off (long)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "thymosin-alpha-1",
  "name": "Thymosin Alpha-1",
  "siteName": "Thymosin Alpha-1: TA1",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 2
   }
  ],
  "primaryVial": 0,
  "intervalDays": 3,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "label",
    "label": "Label: 1.6 mg Mon/Thu (Zadaxin regimen, grade A)",
    "steps": [
     {
      "dose": 1.6,
      "weeks": 24
     }
    ],
    "weekdays": [
     1,
     4
    ]
   },
   {
    "id": "catalog-daily",
    "label": "Catalog: 1.6 mg daily × 2 weeks (grade E)",
    "steps": [
     {
      "dose": 1.6,
      "weeks": 2
     }
    ]
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "Catalog: 4–24 weeks on, 2–12 weeks off."
  },
  "cycleOptions": [
   {
    "on": 28,
    "off": 14,
    "label": "4 wk on / 2 wk off (short)"
   },
   {
    "on": 168,
    "off": 84,
    "label": "24 wk on / 12 wk off (long)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "vip",
  "name": "VIP",
  "siteName": "VIP",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 2.5
   },
   {
    "mg": 10,
    "ml": 2
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog 8-week ladder, Mon–Fri (grade E)",
    "steps": [
     {
      "dose": 0.1,
      "weeks": 1
     },
     {
      "dose": 0.15,
      "weeks": 2
     },
     {
      "dose": 0.2,
      "weeks": 5
     }
    ],
    "weekdays": [
     1,
     2,
     3,
     4,
     5
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 21,
   "note": "Catalog: 8 weeks on, 2–4 weeks off (or 3 months on, 1 off)."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 21,
    "label": "8 wk on / 3 wk off (default)"
   },
   {
    "on": 56,
    "off": 14,
    "label": "8 wk on / 2 wk off (short)"
   },
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (long)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "bpc-157",
  "name": "BPC-157",
  "siteName": "BPC-157",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 2.5
   },
   {
    "mg": 20,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog ladder, Mon–Fri (grade E)",
    "steps": [
     {
      "dose": 0.25,
      "weeks": 1
     },
     {
      "dose": 0.5,
      "weeks": 3
     },
     {
      "dose": 0.75,
      "weeks": 4
     }
    ],
    "weekdays": [
     1,
     2,
     3,
     4,
     5
    ],
    "note": "The catalog allows 1–3 injections a day: set 'Injections/day'."
   }
  ],
  "cycle": {
   "on": 56,
   "off": 35,
   "note": "Catalog: 8–10 weeks on, 4–6 weeks off."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 35,
    "label": "8 wk on / 5 wk off (default)"
   },
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (short)"
   },
   {
    "on": 70,
    "off": 42,
    "label": "10 wk on / 6 wk off (long)"
   }
  ],
  "suggest": [
   "vitc-gelatin",
   "seed-collagen",
   "seed-vitc",
   "seed-msm"
  ]
 },
 {
  "slug": "tb-500",
  "name": "TB-500",
  "siteName": "TB-500",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 2
   }
  ],
  "primaryVial": 0,
  "intervalDays": 3,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 mg → 2 mg Mon/Thu (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 1
     },
     {
      "dose": 2,
      "weeks": 7
     }
    ],
    "weekdays": [
     1,
     4
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 42,
   "note": "Catalog: 8 weeks on, 4–8 weeks off."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 42,
    "label": "8 wk on / 6 wk off (default)"
   },
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (short)"
   },
   {
    "on": 56,
    "off": 56,
    "label": "8 wk on / 8 wk off (long)"
   }
  ],
  "suggest": [
   "vitc-gelatin",
   "seed-collagen",
   "seed-vitc",
   "seed-msm"
  ]
 },
 {
  "slug": "ghk-cu",
  "name": "GHK-Cu",
  "siteName": "GHK-Cu",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 100,
    "ml": 5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 mg → 2 mg daily (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 2
     },
     {
      "dose": 2,
      "weeks": 6
     }
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 56,
   "note": "Catalog: 4–12 weeks on, 4–12 weeks off."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 56,
    "label": "8 wk on / 8 wk off (default)"
   },
   {
    "on": 28,
    "off": 28,
    "label": "4 wk on / 4 wk off (short)"
   },
   {
    "on": 84,
    "off": 84,
    "label": "12 wk on / 12 wk off (long)"
   }
  ],
  "suggest": [
   "seed-collagen",
   "seed-vitc",
   "seed-copper",
   "seed-ha"
  ]
 },
 {
  "slug": "kpv",
  "name": "KPV",
  "siteName": "KPV",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 200 mcg daily (grade E)",
    "steps": [
     {
      "dose": 0.2,
      "weeks": 8
     }
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 42,
   "note": "Catalog: 8 weeks on, 4–8 weeks off."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 42,
    "label": "8 wk on / 6 wk off (default)"
   },
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (short)"
   },
   {
    "on": 56,
    "off": 56,
    "label": "8 wk on / 8 wk off (long)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "cerebrolysin",
  "name": "Cerebrolysin",
  "siteName": "Cerebrolysin",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 64,
    "ml": 8
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 8 mg daily, rising to 3×/day (grade E)",
    "steps": [
     {
      "dose": 8,
      "weeks": 4
     }
    ],
    "note": "The catalog goes 1×/day (wk 1), 2×/day (wk 2), 3×/day (wks 3–4): adjust 'Injections/day'."
   }
  ],
  "cycle": {
   "on": 28,
   "off": 21,
   "note": "Catalog: 4 weeks on, 2–4 weeks off."
  },
  "cycleOptions": [
   {
    "on": 28,
    "off": 21,
    "label": "4 wk on / 3 wk off (default)"
   },
   {
    "on": 28,
    "off": 14,
    "label": "4 wk on / 2 wk off (short)"
   },
   {
    "on": 28,
    "off": 28,
    "label": "4 wk on / 4 wk off (long)"
   }
  ],
  "suggest": [
   "seed-citicoline"
  ]
 },
 {
  "slug": "semax",
  "name": "Semax",
  "siteName": "Semax",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 3
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog 8-week ladder, Mon–Fri (grade E)",
    "steps": [
     {
      "dose": 0.33,
      "weeks": 2
     },
     {
      "dose": 0.5,
      "weeks": 2
     },
     {
      "dose": 1,
      "weeks": 4
     }
    ],
    "weekdays": [
     1,
     2,
     3,
     4,
     5
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 49,
   "note": "Catalog: 6–8 weeks on, 6–8 weeks off."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 49,
    "label": "8 wk on / 7 wk off (default)"
   },
   {
    "on": 42,
    "off": 42,
    "label": "6 wk on / 6 wk off (short)"
   },
   {
    "on": 56,
    "off": 56,
    "label": "8 wk on / 8 wk off (long)"
   }
  ],
  "suggest": [
   "seed-citicoline"
  ]
 },
 {
  "slug": "selank",
  "name": "Selank",
  "siteName": "Selank",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 250 mcg each morning (grade E)",
    "steps": [
     {
      "dose": 0.25,
      "weeks": 6
     }
    ]
   },
   {
    "id": "catalog-2x",
    "label": "Catalog: 300 mcg twice daily (grade E)",
    "steps": [
     {
      "dose": 0.3,
      "weeks": 6
     }
    ],
    "perDay": 2
   }
  ],
  "cycle": {
   "on": 42,
   "off": 21,
   "note": "Catalog: 4–6 weeks on, 2–4 weeks off."
  },
  "cycleOptions": [
   {
    "on": 42,
    "off": 21,
    "label": "6 wk on / 3 wk off (default)"
   },
   {
    "on": 28,
    "off": 14,
    "label": "4 wk on / 2 wk off (short)"
   },
   {
    "on": 42,
    "off": 28,
    "label": "6 wk on / 4 wk off (long)"
   }
  ],
  "suggest": [
   "seed-citicoline"
  ]
 },
 {
  "slug": "dsip",
  "name": "DSIP",
  "siteName": "DSIP",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 5,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 100 → 200 mcg at bedtime (grade E)",
    "steps": [
     {
      "dose": 0.1,
      "weeks": 1
     },
     {
      "dose": 0.2,
      "weeks": 11
     }
    ]
   }
  ],
  "cycle": {
   "on": 84,
   "off": 42,
   "note": "Catalog: 8–12 weeks on, 4–8 weeks off."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 42,
    "label": "12 wk on / 6 wk off (default)"
   },
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (short)"
   },
   {
    "on": 84,
    "off": 56,
    "label": "12 wk on / 8 wk off (long)"
   }
  ],
  "suggest": [
   "melatonin",
   "seed-magnesium"
  ]
 },
 {
  "slug": "pinealon",
  "name": "Pinealon",
  "siteName": "Pinealon",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 20,
    "ml": 2
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 2 mg daily for 10 days (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": null
     }
    ],
    "note": "The cycle setting gives 10 days on, then about 4 months off."
   }
  ],
  "cycle": {
   "on": 10,
   "off": 112,
   "note": "Catalog: 10-day courses, 2–3 times a year."
  },
  "cycleOptions": [
   {
    "on": 10,
    "off": 112,
    "label": "10 d on / 16 wk off (default)"
   }
  ],
  "suggest": [
   "melatonin",
   "seed-magnesium"
  ]
 },
 {
  "slug": "adamax",
  "name": "Adamax",
  "siteName": "Adamax",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 3
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog 8-week ladder (grade E)",
    "steps": [
     {
      "dose": 0.3,
      "weeks": 2
     },
     {
      "dose": 0.5,
      "weeks": 2
     },
     {
      "dose": 0.75,
      "weeks": 2
     },
     {
      "dose": 1,
      "weeks": 2
     }
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 56,
   "note": "Catalog: 8–12 weeks on, washout equal to the cycle length."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 56,
    "label": "8 wk on / 8 wk off (default)"
   },
   {
    "on": 84,
    "off": 84,
    "label": "12 wk on / 12 wk off (long)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "bronchogen",
  "name": "Bronchogen",
  "siteName": "Bronchogen",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 20,
    "ml": 3
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog course: 0.5 mg → 2 mg (grade E)",
    "steps": [
     {
      "dose": 0.5,
      "weeks": 1
     },
     {
      "dose": 2,
      "weeks": 5
     }
    ],
    "weekdays": [
     1,
     2,
     3,
     4,
     5,
     6
    ]
   }
  ],
  "cycle": {
   "on": 40,
   "off": 120,
   "note": "Catalog course length / yearly repeats; 40 days on is the default."
  },
  "cycleOptions": [
   {
    "on": 40,
    "off": 120,
    "label": "40 d on / 120 d off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "cardiogen",
  "name": "Cardiogen",
  "siteName": "Cardiogen",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 20,
    "ml": 2
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog course: 2 mg (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": null
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 20,
   "off": 100,
   "note": "Catalog course length / yearly repeats; 20 days on is the default."
  },
  "cycleOptions": [
   {
    "on": 20,
    "off": 100,
    "label": "20 d on / 100 d off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "cartalax",
  "name": "Cartalax",
  "siteName": "Cartalax",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 20,
    "ml": 2
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog course: 2 mg (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": null
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 20,
   "off": 100,
   "note": "Catalog course length / yearly repeats; 20 days on is the default."
  },
  "cycleOptions": [
   {
    "on": 20,
    "off": 100,
    "label": "20 d on / 100 d off (default)"
   }
  ],
  "suggest": [
   "vitc-rda",
   "vitc-gelatin",
   "seed-collagen",
   "seed-msm"
  ]
 },
 {
  "slug": "crystagen",
  "name": "Crystagen",
  "siteName": "Crystagen",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 20,
    "ml": 2
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog course: 1 mg (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": null
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 20,
   "off": 100,
   "note": "Catalog course length / yearly repeats; 20 days on is the default."
  },
  "cycleOptions": [
   {
    "on": 20,
    "off": 100,
    "label": "20 d on / 100 d off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "pancragen",
  "name": "Pancragen",
  "siteName": "Pancragen",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 20,
    "ml": 2
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog course: 2 mg (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": null
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 30,
   "off": 120,
   "note": "Catalog course length / yearly repeats; 30 days on is the default."
  },
  "cycleOptions": [
   {
    "on": 30,
    "off": 120,
    "label": "30 d on / 120 d off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "prostamax",
  "name": "Prostamax",
  "siteName": "Prostamax",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 20,
    "ml": 2
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog course: 2 mg (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": null
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 30,
   "off": 90,
   "note": "Catalog course length / yearly repeats; 30 days on is the default."
  },
  "cycleOptions": [
   {
    "on": 30,
    "off": 90,
    "label": "30 d on / 90 d off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "vilon",
  "name": "Vilon",
  "siteName": "Vilon",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 20,
    "ml": 2
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog course: 5 mg (grade E)",
    "steps": [
     {
      "dose": 5,
      "weeks": null
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 10,
   "off": 110,
   "note": "Catalog course length / yearly repeats; 10 days on is the default."
  },
  "cycleOptions": [
   {
    "on": 10,
    "off": 110,
    "label": "10 d on / 110 d off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "epithalon",
  "name": "Epitalon",
  "siteName": "Epithalon",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 1
   },
   {
    "mg": 10,
    "ml": 3
   },
   {
    "mg": 50,
    "ml": 3
   }
  ],
  "primaryVial": 0,
  "intervalDays": 4,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "ukrainian",
    "label": "Catalog 'Ukrainian': 10 mg every 4 days × 5 (grade E)",
    "steps": [
     {
      "dose": 10,
      "weeks": 3
     }
    ],
    "note": "Set 'Every 4 days'. 5 doses end on day 17."
   },
   {
    "id": "standard",
    "label": "Catalog standard: 5 mg daily × 20 days (grade E)",
    "steps": [
     {
      "dose": 5,
      "weeks": 3
     }
    ]
   }
  ],
  "cycle": {
   "on": 20,
   "off": 140,
   "note": "Catalog: repeat 2–3 times a year."
  },
  "cycleOptions": [
   {
    "on": 20,
    "off": 140,
    "label": "20 d on / 20 wk off (default)"
   }
  ],
  "suggest": [
   "melatonin",
   "seed-magnesium"
  ]
 },
 {
  "slug": "lipo-shredder",
  "name": "LIPO Shredder",
  "siteName": "LIPO Shredder",
  "route": "Injectable",
  "unit": "mL",
  "vials": [
   {
    "mg": 1,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 2,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 mL Mon/Wed/Fri (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 8
     }
    ],
    "weekdays": [
     1,
     3,
     5
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 28,
   "note": "Catalog: 8+ weeks on, washout half as long."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "lipo-b",
  "name": "LIPO-B",
  "siteName": "LIPO-B",
  "route": "Injectable",
  "unit": "mL",
  "vials": [
   {
    "mg": 1,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 2,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 mL Mon/Wed/Fri (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 8
     }
    ],
    "weekdays": [
     1,
     3,
     5
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 28,
   "note": "Catalog: 8+ weeks on, washout half as long."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (default)"
   }
  ],
  "suggest": [
   "seed-b12"
  ]
 },
 {
  "slug": "lipo-c",
  "name": "LIPO-C",
  "siteName": "LIPO-C",
  "route": "Injectable",
  "unit": "mL",
  "vials": [
   {
    "mg": 1,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 2,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 mL Mon/Wed/Fri (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 8
     }
    ],
    "weekdays": [
     1,
     3,
     5
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 28,
   "note": "Catalog: 8+ weeks on, washout half as long."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (default)"
   }
  ],
  "suggest": [
   "seed-b12"
  ]
 },
 {
  "slug": "lipo-c-2",
  "name": "LIPO-C+",
  "siteName": "LIPO-C+",
  "route": "Injectable",
  "unit": "mL",
  "vials": [
   {
    "mg": 1,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 2,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 mL Mon/Wed/Fri (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 8
     }
    ],
    "weekdays": [
     1,
     3,
     5
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 28,
   "note": "Catalog: 8+ weeks on, washout half as long."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "lipo-mino-mix",
  "name": "LIPO-Mino-Mix",
  "siteName": "LIPO-Mino-Mix",
  "route": "Injectable",
  "unit": "mL",
  "vials": [
   {
    "mg": 1,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 2,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 mL Mon/Wed/Fri (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 8
     }
    ],
    "weekdays": [
     1,
     3,
     5
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 28,
   "note": "Catalog: 8+ weeks on, washout half as long."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "super-tropic",
  "name": "Super Tropic",
  "siteName": "Super Tropic",
  "route": "Injectable",
  "unit": "mL",
  "vials": [
   {
    "mg": 1,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 2,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 0.5 mL Mon/Thu (grade E)",
    "steps": [
     {
      "dose": 0.5,
      "weeks": 6
     }
    ],
    "weekdays": [
     1,
     4
    ]
   }
  ],
  "cycle": {
   "on": 42,
   "off": 21,
   "note": "Catalog: 4–6 weeks on, 2–3 off."
  },
  "cycleOptions": [
   {
    "on": 42,
    "off": 21,
    "label": "6 wk on / 3 wk off (default)"
   },
   {
    "on": 28,
    "off": 14,
    "label": "4 wk on / 2 wk off (short)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "wolverineblend",
  "name": "BPC-157 / TB-500 (\"Wolverine\")",
  "siteName": "BPC-157/TB-500 Blend",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 20,
    "ml": 2
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog protocol (grade E)",
    "steps": [
     {
      "dose": 0.6,
      "weeks": 2
     },
     {
      "dose": 0.8,
      "weeks": 6
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 56,
   "off": 42,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 42,
    "label": "8 wk on / 6 wk off (default)"
   }
  ],
  "suggest": [
   "vitc-gelatin",
   "seed-collagen",
   "seed-vitc",
   "seed-msm"
  ]
 },
 {
  "slug": "bpc-157-tb-500-cartalax",
  "name": "BPC-157 / TB-500 / Cartalax",
  "siteName": "BPC-157/TB-500/Cartalax",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 5,
    "ml": 2
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog protocol (grade E)",
    "steps": [
     {
      "dose": 0.15,
      "weeks": 2
     },
     {
      "dose": 0.2,
      "weeks": 6
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 56,
   "off": 28,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (default)"
   }
  ],
  "suggest": [
   "vitc-rda",
   "vitc-gelatin",
   "seed-msm"
  ]
 },
 {
  "slug": "hulk-2",
  "name": "CJC-1295 (no DAC) / Ipamorelin 10/10",
  "siteName": "CJC No DAC/Ipamorelin 10/10mg Blend",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 20,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog protocol (grade E)",
    "steps": [
     {
      "dose": 0.1,
      "weeks": 2
     },
     {
      "dose": 0.15,
      "weeks": 2
     },
     {
      "dose": 0.2,
      "weeks": 2
     },
     {
      "dose": 0.25,
      "weeks": 6
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 84,
   "off": 84,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 84,
    "label": "12 wk on / 12 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "cjc-no-dac-5mg-ipamorelin-5mg-blend",
  "name": "CJC-1295 (no DAC) / Ipamorelin 5/5",
  "siteName": "CJC No DAC/Ipamorelin 5/5mg Blend",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog protocol (grade E)",
    "steps": [
     {
      "dose": 0.24,
      "weeks": 4
     },
     {
      "dose": 0.6,
      "weeks": 8
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 84,
   "off": 84,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 84,
    "label": "12 wk on / 12 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "glow",
  "name": "GLOW",
  "siteName": "GLOW",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 50,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog protocol (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 2
     },
     {
      "dose": 2,
      "weeks": 6
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 56,
   "off": 56,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 56,
    "label": "8 wk on / 8 wk off (default)"
   }
  ],
  "suggest": [
   "vitc-gelatin",
   "seed-collagen",
   "seed-vitc",
   "seed-copper",
   "seed-ha"
  ]
 },
 {
  "slug": "glow-tropic",
  "name": "GLOW Tropic",
  "siteName": "GLOW Tropic Blend",
  "route": "Injectable",
  "unit": "mL",
  "vials": [
   {
    "mg": 1,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog protocol (grade E)",
    "steps": [
     {
      "dose": 0.5,
      "weeks": 1
     },
     {
      "dose": 0.75,
      "weeks": 1
     },
     {
      "dose": 1,
      "weeks": 4
     }
    ],
    "weekdays": [
     1,
     4
    ]
   }
  ],
  "cycle": {
   "on": 42,
   "off": 21,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 42,
    "off": 21,
    "label": "6 wk on / 3 wk off (default)"
   }
  ],
  "suggest": [
   "vitc-rda",
   "collagen-peptides",
   "glynac"
  ]
 },
 {
  "slug": "glp1-scagrilinitide",
  "name": "Semaglutide / Cagrilintide 5/5",
  "siteName": "GLP1-S/Cagrilinitide Blend",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 5,
    "ml": 1.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 7,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog protocol (grade E)",
    "steps": [
     {
      "dose": 0.25,
      "weeks": 4
     },
     {
      "dose": 0.5,
      "weeks": 4
     },
     {
      "dose": 0.75,
      "weeks": 4
     },
     {
      "dose": 1,
      "weeks": 4
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "Catalog cycle."
  },
  "cycleOptions": [],
  "suggest": [
   "creatine"
  ]
 },
 {
  "slug": "glp3-r-cagrilinitide-blend",
  "name": "Retatrutide / Cagrilintide 12.5/2.5",
  "siteName": "GLP3-R/Cagrilinitide Blend",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 12.5,
    "ml": 1.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 7,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog protocol (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 4
     },
     {
      "dose": 3,
      "weeks": 4
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "Catalog cycle."
  },
  "cycleOptions": [],
  "suggest": [
   "creatine"
  ]
 },
 {
  "slug": "illumi-neuro-blend",
  "name": "Illumi-neuro",
  "siteName": "Illumi-neuro",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog protocol (grade E)",
    "steps": [
     {
      "dose": 0.12,
      "weeks": 1
     },
     {
      "dose": 0.2,
      "weeks": 3
     },
     {
      "dose": 0.24,
      "weeks": 4
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 56,
   "off": 28,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "k-copper",
  "name": "K-Copper",
  "siteName": "K-Copper",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 50,
    "ml": 3
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog protocol (grade E)",
    "steps": [
     {
      "dose": 0.67,
      "weeks": 1
     },
     {
      "dose": 1.33,
      "weeks": 5
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 42,
   "off": 35,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 42,
    "off": 35,
    "label": "6 wk on / 5 wk off (default)"
   }
  ],
  "suggest": [
   "vitc-rda",
   "seed-collagen",
   "seed-copper"
  ]
 },
 {
  "slug": "klow",
  "name": "KLOW",
  "siteName": "KLOW",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 50,
    "ml": 2.5
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog protocol (grade E)",
    "steps": [
     {
      "dose": 1.6,
      "weeks": 5
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 35,
   "off": 35,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 35,
    "off": 35,
    "label": "5 wk on / 5 wk off (default)"
   }
  ],
  "suggest": [
   "vitc-gelatin",
   "seed-collagen",
   "seed-vitc",
   "seed-copper",
   "seed-ha"
  ]
 },
 {
  "slug": "mito-blend",
  "name": "Mito Blend",
  "siteName": "Mito Blend",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 100,
    "ml": 3
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog protocol (grade E)",
    "steps": [
     {
      "dose": 16.7,
      "weeks": 10
     }
    ],
    "weekdays": [
     1,
     4
    ]
   }
  ],
  "cycle": {
   "on": 70,
   "off": 28,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 70,
    "off": 28,
    "label": "10 wk on / 4 wk off (default)"
   }
  ],
  "suggest": [
   "nr-precursor"
  ]
 },
 {
  "slug": "selank-10mg-semax-10mg",
  "name": "Selank / Semax 10/10",
  "siteName": "Selank/Semax 10mg Blend",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 20,
    "ml": 3
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog protocol (grade E)",
    "steps": [
     {
      "dose": 0.2,
      "weeks": 1
     },
     {
      "dose": 0.3,
      "weeks": 1
     },
     {
      "dose": 0.4,
      "weeks": 1
     },
     {
      "dose": 0.5,
      "weeks": 5
     }
    ],
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 56,
   "off": 21,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 21,
    "label": "8 wk on / 3 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "tesamorelin-ipamorelin-blend",
  "name": "Tesamorelin / Ipamorelin 10/3",
  "siteName": "Tesamorelin/Ipamorelin Blend",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 10,
    "ml": 3
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog protocol (grade E)",
    "steps": [
     {
      "dose": 0.77,
      "weeks": 6
     },
     {
      "dose": 1.53,
      "weeks": 6
     }
    ],
    "weekdays": [
     1,
     2,
     3,
     4,
     5
    ]
   }
  ],
  "cycle": {
   "on": 84,
   "off": 42,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 42,
    "label": "12 wk on / 6 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "tesamorelin-ipamorelin-cjc-1295-no-dac",
  "name": "Tesamorelin / Ipamorelin / CJC-1295 (no DAC)",
  "siteName": "Tesamorelin/Ipamorelin/CJC-1295 NO DAC",
  "route": "Injectable",
  "unit": "mg",
  "vials": [
   {
    "mg": 6,
    "ml": 3
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": 60,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog protocol (grade E)",
    "steps": [
     {
      "dose": 0.3,
      "weeks": 6
     },
     {
      "dose": 0.5,
      "weeks": 6
     }
    ],
    "weekdays": [
     1,
     2,
     3,
     4,
     5
    ]
   }
  ],
  "cycle": {
   "on": 84,
   "off": 42,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 42,
    "label": "12 wk on / 6 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "5-amino-1mq-oral",
  "name": "5-Amino-1MQ (oral)",
  "siteName": "5-Amino-1MQ",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 60,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule → 2 capsules (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 4
     },
     {
      "dose": 2,
      "weeks": 4
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 56,
   "off": 21,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 21,
    "label": "8 wk on / 3 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "bpc-157-oral",
  "name": "BPC-157 (oral)",
  "siteName": "BPC-157",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 60,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 8
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 56,
   "off": 21,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 21,
    "label": "8 wk on / 3 wk off (default)"
   }
  ],
  "suggest": [
   "vitc-rda",
   "vitc-gelatin"
  ]
 },
 {
  "slug": "bpc-157tb-500-500-500mcg-oral",
  "name": "BPC-157 / TB-500 (oral)",
  "siteName": "BPC-157/TB-500 Blend",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 60,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 8
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 56,
   "off": 21,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 21,
    "label": "8 wk on / 3 wk off (default)"
   }
  ],
  "suggest": [
   "vitc-rda",
   "vitc-gelatin"
  ]
 },
 {
  "slug": "ghk-cu-oral",
  "name": "GHK-Cu (oral)",
  "siteName": "GHK-Cu",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 60,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule → 2 capsules → 3 capsules (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 4
     },
     {
      "dose": 2,
      "weeks": 4
     },
     {
      "dose": 3,
      "weeks": 4
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 84,
   "off": 42,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 42,
    "label": "12 wk on / 6 wk off (default)"
   }
  ],
  "suggest": [
   "vitc-rda",
   "collagen-peptides"
  ]
 },
 {
  "slug": "kpv-500mcg",
  "name": "KPV (oral)",
  "siteName": "KPV",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 60,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 8
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 56,
   "off": 21,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 21,
    "label": "8 wk on / 3 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "sermorelin-oral",
  "name": "Sermorelin (oral)",
  "siteName": "Sermorelin",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 30,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 16
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 112,
   "off": 49,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 112,
    "off": 49,
    "label": "16 wk on / 7 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "slu-pp-332-oral",
  "name": "SLU-PP-332 (oral)",
  "siteName": "SLU-PP-332",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 60,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule → 2 capsules (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 1
     },
     {
      "dose": 2,
      "weeks": 7
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 56,
   "off": 21,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 21,
    "label": "8 wk on / 3 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "slu-pp-332-5-amino-1mq-oral",
  "name": "SLU-PP-332 / 5-Amino-1MQ (oral)",
  "siteName": "SLU-PP-332/5-AMINO-1MQ",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 60,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule → 2 capsules (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 2
     },
     {
      "dose": 2,
      "weeks": 6
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 56,
   "off": 21,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 21,
    "label": "8 wk on / 3 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "pt-141-oxytocin-n-acetyl-l-tyrosine-kisspeptin-vip-oral",
  "name": "PT-141 / Oxytocin / NALT / Kisspeptin / VIP (oral)",
  "siteName": "PT-141/Oxytocin/N-Acetyl L-Tyrosine/Kisspeptin/VIP",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 30,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 8
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 56,
   "off": 24,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 24,
    "label": "8 wk on / 24 d off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "glowklow-oral",
  "name": "GLOW + KLOW (oral)",
  "siteName": "Glow + Klow",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 60,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 12
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 84,
   "off": 35,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 35,
    "label": "12 wk on / 5 wk off (default)"
   }
  ],
  "suggest": [
   "vitc-rda",
   "collagen-peptides",
   "seed-ha"
  ]
 },
 {
  "slug": "ahk-cu-raw-topical",
  "name": "AHK-Cu (topical)",
  "siteName": "AHK-CU",
  "route": "Topical",
  "unit": "application",
  "vials": [],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 2 applications (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": null
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "Catalog cycle."
  },
  "cycleOptions": [],
  "suggest": [
   "vitc-rda",
   "seed-collagen",
   "seed-copper",
   "seed-ha"
  ]
 },
 {
  "slug": "adamax-intranasal",
  "name": "Adamax (nasal)",
  "siteName": "Adamax",
  "route": "Intranasal",
  "unit": "spray",
  "vials": [
   {
    "mg": 100,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 2 sprays (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": 4
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 30,
   "off": 30,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 30,
    "off": 30,
    "label": "30 d on / 30 d off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "dsip-intranasal",
  "name": "DSIP (nasal)",
  "siteName": "DSIP",
  "route": "Intranasal",
  "unit": "spray",
  "vials": [
   {
    "mg": 100,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 2 sprays (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": 4
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "Catalog cycle."
  },
  "cycleOptions": [],
  "suggest": [
   "melatonin"
  ]
 },
 {
  "slug": "epithalon-intranasal",
  "name": "Epitalon (nasal)",
  "siteName": "Epithalon",
  "route": "Intranasal",
  "unit": "spray",
  "vials": [
   {
    "mg": 100,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 2 sprays → 4 sprays (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": 2
     },
     {
      "dose": 4,
      "weeks": 3
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 35,
   "off": 56,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 35,
    "off": 56,
    "label": "5 wk on / 8 wk off (default)"
   }
  ],
  "suggest": [
   "melatonin"
  ]
 },
 {
  "slug": "glutathione-intranasal",
  "name": "Glutathione (nasal)",
  "siteName": "Glutathione",
  "route": "Intranasal",
  "unit": "spray",
  "vials": [
   {
    "mg": 100,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 2 sprays (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": 12
     }
    ],
    "perDay": 3,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 84,
   "off": 35,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 35,
    "label": "12 wk on / 5 wk off (default)"
   }
  ],
  "suggest": [
   "glynac"
  ]
 },
 {
  "slug": "na-semax-amidate-intranasal",
  "name": "N-Acetyl Semax Amidate (nasal)",
  "siteName": "NA-Semax-Amidate",
  "route": "Intranasal",
  "unit": "spray",
  "vials": [
   {
    "mg": 100,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 3 sprays → 3 sprays (grade E)",
    "steps": [
     {
      "dose": 3,
      "weeks": 1
     },
     {
      "dose": 3,
      "weeks": 3
     }
    ],
    "perDay": 2,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 30,
   "off": 30,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 30,
    "off": 30,
    "label": "30 d on / 30 d off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "nad-intranasal",
  "name": "NAD+ (nasal)",
  "siteName": "NAD",
  "route": "Intranasal",
  "unit": "spray",
  "vials": [],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 4 sprays (grade E)",
    "steps": [
     {
      "dose": 4,
      "weeks": 12
     }
    ],
    "perDay": 1,
    "weekdays": [
     1,
     4
    ]
   }
  ],
  "cycle": {
   "on": 84,
   "off": 14,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 14,
    "label": "12 wk on / 2 wk off (default)"
   }
  ],
  "suggest": [
   "nr-precursor"
  ]
 },
 {
  "slug": "nad-glutathione-vitamin-c-intranasal",
  "name": "NAD+ / Glutathione / Vitamin C (nasal)",
  "siteName": "NAD/Glutathione/Vitamin C",
  "route": "Intranasal",
  "unit": "spray",
  "vials": [],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 2 sprays (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": 12
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 84,
   "off": 28,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 28,
    "label": "12 wk on / 4 wk off (default)"
   }
  ],
  "suggest": [
   "glynac",
   "nr-precursor"
  ]
 },
 {
  "slug": "oxytocin-intranasal",
  "name": "Oxytocin (nasal)",
  "siteName": "Oxytocin",
  "route": "Intranasal",
  "unit": "spray",
  "vials": [],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 2 sprays (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": 8
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 56,
   "off": 28,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 28,
    "label": "8 wk on / 4 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "pinealon-intranasal",
  "name": "Pinealon (nasal)",
  "siteName": "Pinealon",
  "route": "Intranasal",
  "unit": "spray",
  "vials": [
   {
    "mg": 100,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 4 sprays (grade E)",
    "steps": [
     {
      "dose": 4,
      "weeks": 4
     }
    ],
    "perDay": 1,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 28,
   "off": 14,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 28,
    "off": 14,
    "label": "4 wk on / 2 wk off (default)"
   }
  ],
  "suggest": [
   "melatonin"
  ]
 },
 {
  "slug": "selank-intranasal",
  "name": "Selank (nasal)",
  "siteName": "Selank",
  "route": "Intranasal",
  "unit": "spray",
  "vials": [
   {
    "mg": 100,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 2 sprays (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": 6
     }
    ],
    "perDay": 3,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 42,
   "off": 21,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 42,
    "off": 21,
    "label": "6 wk on / 3 wk off (default)"
   }
  ],
  "suggest": [
   "seed-citicoline"
  ]
 },
 {
  "slug": "semax-intransal",
  "name": "Semax (nasal)",
  "siteName": "Semax",
  "route": "Intranasal",
  "unit": "spray",
  "vials": [
   {
    "mg": 100,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 3 sprays (grade E)",
    "steps": [
     {
      "dose": 3,
      "weeks": 6
     }
    ],
    "perDay": 2,
    "weekdays": []
   }
  ],
  "cycle": {
   "on": 42,
   "off": 21,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 42,
    "off": 21,
    "label": "6 wk on / 3 wk off (default)"
   }
  ],
  "suggest": [
   "seed-citicoline"
  ]
 },
 {
  "slug": "orforglipron-2",
  "name": "Orforglipron",
  "siteName": "Orforglipron",
  "route": "Oral",
  "unit": "tablet",
  "vials": [
   {
    "mg": 30,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 0.25 tablets → 0.5 tablets → 1 tablet → 2 tablets (grade E)",
    "steps": [
     {
      "dose": 0.25,
      "weeks": 1
     },
     {
      "dose": 0.5,
      "weeks": 1
     },
     {
      "dose": 1,
      "weeks": 4
     },
     {
      "dose": 2,
      "weeks": 4
     }
    ]
   }
  ],
  "cycle": {
   "on": 182,
   "off": 182,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 182,
    "off": 182,
    "label": "26 wk on / 26 wk off (default)"
   }
  ],
  "suggest": [
   "seed-creatine"
  ]
 },
 {
  "slug": "mk-677-25mg-oral",
  "name": "MK-677 (Ibutamoren)",
  "siteName": "MK-677",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 30,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 12
     }
    ]
   }
  ],
  "cycle": {
   "on": 84,
   "off": 42,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 42,
    "label": "12 wk on / 6 wk off (default)"
   }
  ],
  "suggest": [
   "seed-creatine"
  ]
 },
 {
  "slug": "mk-777-oral",
  "name": "MK-777 (\"Acetamoren\")",
  "siteName": "MK-777",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 30,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 8
     }
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 42,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 42,
    "label": "8 wk on / 6 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "tesofensine",
  "name": "Tesofensine",
  "siteName": "Tesofensine",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 30,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 24
     }
    ]
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "Catalog cycle."
  },
  "cycleOptions": [],
  "suggest": [
   "creatine"
  ]
 },
 {
  "slug": "methylene-blue-25mg-oral",
  "name": "Methylene Blue (oral)",
  "siteName": "Methylene Blue",
  "route": "Oral",
  "unit": "pill",
  "vials": [
   {
    "mg": 30,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 pill (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 8
     }
    ]
   }
  ],
  "cycle": {
   "on": 56,
   "off": 21,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 56,
    "off": 21,
    "label": "8 wk on / 3 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "9-me-bc-methylene-blue",
  "name": "9-Me-BC + Methylene Blue",
  "siteName": "9-ME-BC",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 30,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 8
     }
    ]
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "Catalog cycle."
  },
  "cycleOptions": [],
  "suggest": []
 },
 {
  "slug": "dihexa-oral",
  "name": "Dihexa",
  "siteName": "Dihexa",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 30,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 12
     }
    ]
   }
  ],
  "cycle": {
   "on": 84,
   "off": 35,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 35,
    "label": "12 wk on / 5 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "dihexa-methylene-blue-tesofensine-oral",
  "name": "Dihexa / Methylene Blue / Tesofensine",
  "siteName": "Dihexa/Tesofensine/Methylene Blue",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 30,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 8
     }
    ]
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "Catalog cycle."
  },
  "cycleOptions": [],
  "suggest": []
 },
 {
  "slug": "bpc-157-tb-500-kpv-larazotide",
  "name": "BPC-157 / TB-500 / KPV / Larazotide (oral)",
  "siteName": "BPC-157/TB-500/KPV/Larazotide",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 60,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 12
     }
    ]
   }
  ],
  "cycle": {
   "on": 84,
   "off": 35,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 35,
    "label": "12 wk on / 5 wk off (default)"
   }
  ],
  "suggest": [
   "vitc-rda",
   "vitc-gelatin"
  ]
 },
 {
  "slug": "bam-15",
  "name": "BAM-15",
  "siteName": "Bam-15",
  "route": "Oral",
  "unit": "pill",
  "vials": [
   {
    "mg": 30,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 pill (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 4
     }
    ]
   }
  ],
  "cycle": {
   "on": 28,
   "off": 28,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 28,
    "off": 28,
    "label": "4 wk on / 4 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "slu-pp-332-bam-15",
  "name": "SLU-PP-332 / BAM-15 (oral)",
  "siteName": "SLU-PP-332/BAM-15",
  "route": "Oral",
  "unit": "pill",
  "vials": [
   {
    "mg": 30,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 pill (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 6
     }
    ]
   }
  ],
  "cycle": {
   "on": 42,
   "off": 21,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 42,
    "off": 21,
    "label": "6 wk on / 3 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "atx-304-oral",
  "name": "ATX-304",
  "siteName": "ATX-304",
  "route": "Oral",
  "unit": "capsule",
  "vials": [
   {
    "mg": 30,
    "ml": 1
   }
  ],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 1 capsule (grade E)",
    "steps": [
     {
      "dose": 1,
      "weeks": 8
     }
    ]
   }
  ],
  "cycle": {
   "on": 84,
   "off": 42,
   "note": "Catalog cycle."
  },
  "cycleOptions": [
   {
    "on": 84,
    "off": 42,
    "label": "12 wk on / 6 wk off (default)"
   }
  ],
  "suggest": []
 },
 {
  "slug": "acetyl-hexapeptide-8",
  "name": "Acetyl Hexapeptide-8 (Argireline)",
  "siteName": "Acetyl hexapeptide-8, Raw",
  "route": "Topical",
  "unit": "application",
  "vials": [],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 2 applications (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": null
     }
    ]
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "Catalog cycle."
  },
  "cycleOptions": [],
  "suggest": [
   "vitc-rda",
   "collagen-peptides"
  ]
 },
 {
  "slug": "snap-8",
  "name": "Snap-8",
  "siteName": "Snap 8",
  "route": "Topical",
  "unit": "application",
  "vials": [],
  "primaryVial": 0,
  "intervalDays": 1,
  "useWithinDays": null,
  "templates": [
   {
    "id": "catalog",
    "label": "Catalog: 2 applications (grade E)",
    "steps": [
     {
      "dose": 2,
      "weeks": null
     }
    ]
   }
  ],
  "cycle": {
   "on": 0,
   "off": 0,
   "note": "Catalog cycle."
  },
  "cycleOptions": [],
  "suggest": [
   "vitc-rda",
   "collagen-peptides"
  ]
 }
];
window.RDS_SUPPLEMENTS = [
 {
  "id": "vitc-gelatin",
  "name": "Gelatin 15 g + vitamin C (~50 mg), 1 hour before training / rehab loading",
  "grade": "B",
  "dose": 15,
  "unit": "g gelatin",
  "timing": "1 h before training (+ ~50 mg vitamin C)"
 },
 {
  "id": "collagen-peptides",
  "name": "Hydrolyzed collagen peptides daily",
  "grade": "B",
  "dose": 5,
  "unit": "g",
  "timing": "Daily (trials used 2.5–10 g)"
 },
 {
  "id": "vitc-rda",
  "name": "Vitamin C sufficiency (RDA 75 mg women / 90 mg men)",
  "grade": "A",
  "dose": 90,
  "unit": "mg",
  "timing": "Daily, or from diet"
 },
 {
  "id": "creatine",
  "name": "Creatine monohydrate with resistance training",
  "grade": "B",
  "dose": 3,
  "unit": "g",
  "timing": "Daily (3–5 g is the commonly cited maintenance dose)"
 },
 {
  "id": "glynac",
  "name": "Glycine + N-acetylcysteine (GlyNAC)",
  "grade": "B",
  "dose": 1,
  "unit": "dose",
  "timing": "Daily, per product label (trial doses were weight-based)"
 },
 {
  "id": "nr-precursor",
  "name": "Nicotinamide riboside (oral NAD+ precursor)",
  "grade": "B",
  "dose": 1000,
  "unit": "mg",
  "timing": "Daily, split AM/PM (dose per secondary summaries)"
 },
 {
  "id": "melatonin",
  "name": "Melatonin before bed",
  "grade": "B",
  "dose": 1,
  "unit": "dose",
  "timing": "30–60 min before bed, per product label"
 },
 {
  "id": "seed-creatine",
  "name": "Creatine monohydrate",
  "grade": "B",
  "dose": 5,
  "unit": "g",
  "perDay": 1,
  "weekdays": [],
  "timing": "Post-movement · Seed v5.1 (keep)",
  "seed": true
 },
 {
  "id": "seed-collagen",
  "name": "Collagen peptides",
  "grade": "B",
  "dose": 10,
  "unit": "g",
  "perDay": 1,
  "weekdays": [],
  "timing": "Post-movement · Seed v5.1 (keep)",
  "seed": true
 },
 {
  "id": "seed-vitc",
  "name": "Vitamin C",
  "grade": "A",
  "dose": 500,
  "unit": "mg",
  "perDay": 1,
  "weekdays": [],
  "timing": "AM (before collagen) · Seed v5.1 (adjust)",
  "seed": true
 },
 {
  "id": "seed-msm",
  "name": "MSM (methylsulfonylmethane)",
  "grade": "C",
  "dose": 1,
  "unit": "g",
  "perDay": 3,
  "weekdays": [],
  "timing": "Divided: AM, post-movement, midday · Seed v5.1 (keep)",
  "seed": true
 },
 {
  "id": "seed-benfotiamine",
  "name": "Benfotiamine (B1)",
  "grade": "B",
  "dose": 150,
  "unit": "mg",
  "perDay": 1,
  "weekdays": [],
  "timing": "AM · Seed v5.1 (keep)",
  "seed": true
 },
 {
  "id": "seed-alcar",
  "name": "Acetyl-L-carnitine (ALCAR)",
  "grade": "B",
  "dose": 500,
  "unit": "mg",
  "perDay": 1,
  "weekdays": [],
  "timing": "AM · Seed v5.1 (keep)",
  "seed": true
 },
 {
  "id": "seed-b12",
  "name": "Methyl-B12",
  "grade": "A",
  "dose": 200,
  "unit": "mcg",
  "perDay": 1,
  "weekdays": [],
  "timing": "AM · Seed v5.1 (keep)",
  "seed": true
 },
 {
  "id": "seed-citicoline",
  "name": "CDP-Choline (citicoline)",
  "grade": "C",
  "dose": 300,
  "unit": "mg",
  "perDay": 1,
  "weekdays": [
   0,
   4
  ],
  "timing": "AM, zinc days · Seed v5.1 (keep)",
  "seed": true
 },
 {
  "id": "seed-zinc",
  "name": "Zinc picolinate",
  "grade": "A",
  "dose": 30,
  "unit": "mg",
  "perDay": 1,
  "weekdays": [
   0,
   4
  ],
  "timing": "AM, zinc days · Seed v5.1 (adjust)",
  "seed": true
 },
 {
  "id": "seed-copper",
  "name": "Copper bisglycinate",
  "grade": "A",
  "dose": 3,
  "unit": "mg",
  "perDay": 1,
  "weekdays": [
   2,
   6
  ],
  "timing": "AM, copper days · Seed v5.1 (keep)",
  "seed": true
 },
 {
  "id": "seed-k2",
  "name": "Vitamin K2 (MK-7)",
  "grade": "A",
  "dose": 90,
  "unit": "mcg",
  "perDay": 1,
  "weekdays": [],
  "timing": "Evening, with fat · Seed v5.1 (keep)",
  "seed": true
 },
 {
  "id": "seed-ha",
  "name": "Hyaluronic acid (oral)",
  "grade": "B",
  "dose": 120,
  "unit": "mg",
  "perDay": 1,
  "weekdays": [],
  "timing": "Midday · Seed v5.1 (keep)",
  "seed": true
 },
 {
  "id": "seed-magnesium",
  "name": "Magnesium glycinate",
  "grade": "A",
  "dose": 300,
  "unit": "mg",
  "perDay": 1,
  "weekdays": [],
  "timing": "Evening · Seed v5.1 (keep)",
  "seed": true
 },
 {
  "id": "seed-omega3",
  "name": "Omega-3 (OmegaXL in your stack)",
  "grade": "N/E",
  "dose": 1,
  "unit": "softgel",
  "perDay": 1,
  "weekdays": [],
  "timing": "Evening · Seed v5.1 (unknown)",
  "seed": true
 }
];
