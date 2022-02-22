// Find key from Nested Object

const yearlyReport = {
    p1 : {
        jan : {
            risk : {}
        },
        feb : {},
        mar : {}
    },
    p2 : {
        apr : {},
        may : {},
        jun : {}
    },
    p3 : {
        jul : { },
        aug : { },
        sep : {
            bonuses: []
        }
    },
    p4 : {
        oct : { },
        nov : {
            risk : true
        },
        dec : { }
    }
}

const keyExists = (obj, key) => {
    if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
        return false;
    }
    else if (obj.hasOwnProperty(key)) {
        return true;
    }
    else if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            const result = keyExists(obj[i], key);
            if (result) {
                return result;
            }
        }
    }
    else {
        for (const k in obj) {
            const result = keyExists(obj[k], key);
            if (result) {
                return result;
            }
        }
    }
    return false;
};

console.log(keyExists(yearlyReport, "risk"));
console.log(keyExists(yearlyReport, "holidays"));
console.log(keyExists(yearlyReport, "bonuses"));
console.log(keyExists(yearlyReport, "p4"));
console.log(keyExists(yearlyReport, "mar"));
console.log(keyExists(yearlyReport, "q4"));