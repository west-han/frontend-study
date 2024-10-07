const data = {
    "attributues": [
        {
            "attributeNum": 65,
            "attributeName": "기능",
            "categoryNum": 34,
            "attrDtlNum": 247,
            "attrDtlName": "다이어트"
        },
        {
            "attributeNum": 65,
            "attributeName": "기능",
            "categoryNum": 34,
            "attrDtlNum": 248,
            "attrDtlName": "알러지예방"
        },
        {
            "attributeNum": 65,
            "attributeName": "기능",
            "categoryNum": 34,
            "attrDtlNum": 249,
            "attrDtlName": "뼈/관전 강화"
        },
        {
            "attributeNum": 65,
            "attributeName": "기능",
            "categoryNum": 34,
            "attrDtlNum": 250,
            "attrDtlName": "소화기능 개선"
        },
        {
            "attributeNum": 65,
            "attributeName": "기능",
            "categoryNum": 34,
            "attrDtlNum": 251,
            "attrDtlName": "피부/피모 개선"
        },
        {
            "attributeNum": 66,
            "attributeName": "알갱이크기",
            "categoryNum": 34,
            "attrDtlNum": 252,
            "attrDtlName": "작은알갱이(~8mm)"
        },
        {
            "attributeNum": 66,
            "attributeName": "알갱이크기",
            "categoryNum": 34,
            "attrDtlNum": 253,
            "attrDtlName": "작은알갱이(~13mm)"
        },
        {
            "attributeNum": 66,
            "attributeName": "알갱이크기",
            "categoryNum": 34,
            "attrDtlNum": 254,
            "attrDtlName": "작은알갱이(14mm~)"
        },
        {
            "attributeNum": 67,
            "attributeName": "권장크기",
            "categoryNum": 34,
            "attrDtlNum": 255,
            "attrDtlName": "소형견(4kg~9kg 미만)"
        },
        {
            "attributeNum": 67,
            "attributeName": "권장크기",
            "categoryNum": 34,
            "attrDtlNum": 256,
            "attrDtlName": "중형견 (9kg~22kg 미만)"
        },
        {
            "attributeNum": 67,
            "attributeName": "권장크기",
            "categoryNum": 34,
            "attrDtlNum": 257,
            "attrDtlName": "대형견 (23kg 이상)"
        },
        {
            "attributeNum": 68,
            "attributeName": "형태",
            "categoryNum": 34,
            "attrDtlNum": 258,
            "attrDtlName": "건식사료"
        },
        {
            "attributeNum": 68,
            "attributeName": "형태",
            "categoryNum": 34,
            "attrDtlNum": 259,
            "attrDtlName": "소프트사료"
        },
        {
            "attributeNum": 68,
            "attributeName": "형태",
            "categoryNum": 34,
            "attrDtlNum": 260,
            "attrDtlName": "오븐베이크"
        },
        {
            "attributeNum": 68,
            "attributeName": "형태",
            "categoryNum": 34,
            "attrDtlNum": 261,
            "attrDtlName": "동결건조"
        },
        {
            "attributeNum": 68,
            "attributeName": "형태",
            "categoryNum": 34,
            "attrDtlNum": 262,
            "attrDtlName": "에어드라이"
        }
    ]
};


const attributes = data.attributes.filter(
    (attribute, idx, callback) => 
        idx === callback.findIndex(
            (attribute2) => attribute2.attributeNum === attribute.attributeNum
        )
    ).map(item => new {'attributeNum': item.attributeNum, 'attributeName': item.attributeName} );


console.log(attrNums);