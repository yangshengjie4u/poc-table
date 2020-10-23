export default {
    "headers": {
        "size": "Sample size (SMN)",
        "true": "SMN Formed",
        "false": "No SMN Formed"
    },
    "variables": [
        {
            "name": "Mean age at diagnosis (mo)",
            "size": {
                "total": 5987,
                "true": 43
            },
            "pval": 0.27,
            "keys": [
                {
                    "name": "",
                    "data": {
                        "true": 27.5,
                        "false": 18.0
                    }
                }
            ]
        },
        {
            "name": "Age at diagnosis",
            "size": {
                "total": 5987,
                "true": 43
            },
            "pval": 0.27,
            "keys": [
                {
                    "name": "< 18 mo",
                    "data": {
                        "true": 41.9,
                        "false": 50.0
                    }
                },
                {
                    "name": ">= 18 mo",
                    "data": {
                        "true": 58.1,
                        "false": 50.0
                    }
                }
            ]
        },
        {
            "name": "Sex",
            "size": {
                "total": 5987,
                "true": 43
            },
            "pval": 0.07,
            "keys": [
                {
                    "name": "Female",
                    "data": {
                        "true": 62.8,
                        "false": 46.6
                    }
                },
                {
                    "name": "Male",
                    "data": {
                        "true": 37.2,
                        "false": 53.4
                    }
                }
            ]
        }
    ]
}




//     [
// {"name":"Clinical Characteristic", "sampleSize":null, "SMN":null, "category":[]},
// {"name":"Median age at initial diagnosis", "sampleSize":5987, "SMN":43, "pSMN":"27.5 months", "pNoSMN":"18.0 months", "p":0.22, "category":[]},
// {"name":"Age at diagnosis", "sampleSize":5987, "SMN":43, "category":[{"name":">= 18 mo", "pSMN":58.1, "pNoSMN":50, "p":0.27},{"name":"< 18 mo", "pSMN":41.9, "pNoSMN":50, "p":null}]},
// {"name":"Sex", "sampleSize":5987, "SMN":43, "category":[{"name":"Male", "pSMN":37.2, "pNoSMN":53.4, "p":0.07},{"name":"Female", "pSMN":62.8, "pNoSMN":46.6, "p":null}]},
// {"name":"Sex", "sampleSize":5210, "SMN":37, "category":[{"name":"White", "pSMN":80.1, "pNoSMN":84.9, "p":0.08},{"name":"Black", "pSMN":8.1, "pNoSMN":11.8, "p":null},{"name":"Asian/Native", "pSMN":10.8, "pNoSMN":8.3, "p":null}]}
// ];
