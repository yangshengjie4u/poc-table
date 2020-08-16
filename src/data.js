// export default [
//  {"name":"Clinical Characteristic", "sampleSize":null, "SMN":null, "category":[]},
//  {"name":"Median age at initial diagnosis", "sampleSize":5987, "SMN":43, "pSMN":"27.5 months", "pNoSMN":"18.0 months", "p":0.22, "category":[]},
//  {"name":"Age at diagnosis", "sampleSize":5987, "SMN":43, "category":[{"name":">= 18 mo", "pSMN":58.1, "pNoSMN":50, "p":0.27},{"name":"< 18 mo", "pSMN":41.9, "pNoSMN":50, "p":null}]},
//  {"name":"Sex", "sampleSize":5987, "SMN":43, "category":[{"name":"Male", "pSMN":37.2, "pNoSMN":53.4, "p":0.07},{"name":"Female", "pSMN":62.8, "pNoSMN":46.6, "p":null}]}
//  ];



 export default [
   {"id":1, "name":"Clinical Characteristic", "sampleSize":null, "SMN":null, "parent":null},
   {"id":2, "name":"Median age at initial diagnosis", "sampleSize":5987, "SMN":43, "pSMN":"27.5 months", "pNoSMN":"18.0 months", "p":0.22, "parent":null},
   {"id":3, "name":"Age at diagnosis", "sampleSize":5987, "SMN":43, "parent":null},
   {"id":4, "name":">= 18 mo", "sampleSize":null, "SMN":null, "pSMN":58.1, "pNoSMN":50, "p":0.27, "parent":2},
   {"id":5, "name":"< 18 mo", "sampleSize":null, "SMN":null, "pSMN":41.9, "pNoSMN":50, "p":null, "parent":2},
   {"id":6, "name":"Sex", "sampleSize":5987, "SMN":43, "p":null, "parent":null},
   {"id":7, "name":"Male", "sampleSize":null, "SMN":null, "pSMN":37.2, "pNoSMN":53.4, "p":0.07, "parent":6},
   {"id":8, "name":"Female", "sampleSize":null, "SMN":null, "pSMN":62.8, "pNoSMN":46.6, "p":null, "parent":6},
   {"id":9, "name":"Race", "sampleSize":5210, "SMN":37, "parent":null},
   {"id":10, "name":"White", "pSMN":80.1, "pNoSMN":84.9, "p":0.08, "parent":9},
   {"id":11, "name":"Black", "pSMN":8.1, "pNoSMN":11.8, "parent":9},
   {"id":12, "name":"Asian/Native", "pSMN":10.8, "pNoSMN":8.3, "parent":9}
  ];
