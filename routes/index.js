function getCard (data1, data2, data3, data4, data5) {
    return {
        data1: data1[Math.floor(Math.random()*data1.length)],
        data2: data2[Math.floor(Math.random()*data2.length)],
        data3: data3[Math.floor(Math.random()*data3.length)],
        data4: data4[Math.floor(Math.random()*data4.length)],
        data5: data5[Math.floor(Math.random()*data5.length)]
    };
}

function getCard3() {
    return {
        content: "No content."
    };
}

exports.index = function(req, res){
    if(req.method == "GET"){
        const data1 = [
            "1000",
            "2000",
            "3000",
            "5000"
        ];
        const data2 = [
            "Yes",
            "No"
        ];
        const data3 = [
            "10",
            "50",
            "100"
        ];
        const data4 = [
            "50",
            "100",
            "200"
        ];
        const data5 = [
            "Yes",
            "No"
        ];
        var data = {
            scenario1: {
                scenario: 1,
                card1: getCard (data1, data2, data3, data4, data5),
                card2: getCard (data1, data2, data3, data4, data5),
                card3: getCard3()

            },
            scenario2: {
                scenario: 2,
                card1: getCard (data1, data2, data3, data4, data5),
                card2: getCard (data1, data2, data3, data4, data5),
                card3: getCard3()
            },scenario3: {
                scenario: 3,
                card1: getCard (data1, data2, data3, data4, data5),
                card2: getCard (data1, data2, data3, data4, data5),
                card3: getCard3()
            },
            scenario4: {
                scenario: 4,
                card1: getCard (data1, data2, data3, data4, data5),
                card2: getCard (data1, data2, data3, data4, data5),
                card3: getCard3()
            },
            scenario5: {
                scenario: 5,
                card1: getCard (data1, data2, data3, data4, data5),
                card2: getCard (data1, data2, data3, data4, data5),
                card3: getCard3()
            }
        };
        
        var info = JSON.stringify(data || {})

        var renderData = {
            card1: data.scenario1.card1,
            card2: data.scenario1.card2,
            card3: data.scenario1.card3,
            scenario: data.scenario1.scenario, 
            info: info,
            choices: ""
        }
        res.render('index', renderData);
    }
};