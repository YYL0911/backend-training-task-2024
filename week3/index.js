const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

const unitPeice =[
    {
        minCourse: 21,
        price: 1100
    },
    {
        minCourse: 11,
        price: 1300
    },
    {
        minCourse: 0,
        price: 1500
    }
];


// 第一階段：新增課程購買記錄（優惠定價）

// 儲存每筆記錄
let purchaseRecords = []

function addPurchaseRecord (name, purchaseCourse){

    //輸入無效
    if(name == "" || typeof (purchaseCourse) != "number"){
        console.log("輸入錯誤，請輸入有效的會員名稱和課程數量。")
    }
    else{
        //購買課程記錄
        let orderInfo = {
        }

        orderInfo.name = name; // 會員名稱 (name)：字串
        orderInfo.coursesTotal = purchaseCourse; // 購買課程數量：數字
        for(let i = 0; i < unitPeice.length; i++){
            if(unitPeice[i].minCourse <= purchaseCourse){
                orderInfo.unitPrice = unitPeice[i].price; // 課程單價（自動計算）
                break;
            }
        }
        // 總金額（courses × 單價）
        orderInfo.totalPrice = orderInfo.unitPrice * orderInfo.coursesTotal;
        
        purchaseRecords.push(orderInfo)
        console.log(`新增購買記錄成功！會員 ${name} 購買 ${purchaseCourse} 堂課，總金額為 ${orderInfo.totalPrice} 元。`)
    }

}

addPurchaseRecord("Alice", 4); // 印出 console.log 文字為 新增購買記錄成功！會員 Alice 購買 4 堂課，總金額為 6000 元。
addPurchaseRecord("Bob", 12); // 印出 console.log 文字為 新增購買記錄成功！會員 Bob 購買 12 堂課，總金額為 15600 元。
addPurchaseRecord("Charlie", 25); // 印出 console.log 文字為 新增購買記錄成功！會員 Charlie 購買 25 堂課，總金額為 27500 元。
addPurchaseRecord("Hannah", 50); // 印出 console.log 文字為 新增購買記錄成功！會員 Hannah 購買 50 堂課，總金額為 55000 元。
addPurchaseRecord("名稱", "課程數量"); // 印出 console.log 文字為 輸入錯誤，請輸入有效的會員名稱和課程數量。


// 第二階段：計算目前的總營業額
function calculateTotalPrice(){
    let totalPrice = 0
    purchaseRecords.forEach((item) => {
        totalPrice += item.totalPrice;
    })
    console.log(`目前總營業額為 ${totalPrice} 元`);
}

calculateTotalPrice();


// 第三階段：篩選出還沒有購課的會員
function filterNoPurchaseMember(){
    let purchaseMember = []

    purchaseRecords.forEach((item) => {
        purchaseMember.push(item.name)
    })

    let noPurchaseMemberStr = ""
    let noPurchaseMember = members.filter((item) => {
        if(!purchaseMember.includes(item)){
            noPurchaseMemberStr += item + ","
            return true
        }
        else return false
    })

    console.log(`未購買課程的會員有：${noPurchaseMemberStr.slice(0,-1)}`)
}

filterNoPurchaseMember()
