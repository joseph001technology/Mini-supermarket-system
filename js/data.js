/* Shared demonstration data for Supermarket POS and storefront. */
(function(){
  const categories=["Groceries","Dairy & Bakery","Beverages","Household","Personal Care","Stationery","Snacks","Other Retail"];
  const seeds=[
    ["P001","Maize Flour 2kg","Groceries",165,135,42,"600100000001","🌽"],
    ["P002","Pishori Rice 2kg","Groceries",320,260,24,"600100000002","🍚"],
    ["P003","White Sugar 1kg","Groceries",180,150,38,"600100000003","🧂"],
    ["P004","Cooking Oil 1L","Groceries",285,235,19,"600100000004","🫗"],
    ["P005","Tea Leaves 500g","Groceries",245,195,27,"600100000005","🍵"],
    ["P006","Wheat Flour 2kg","Groceries",175,142,31,"600100000006","🌾"],
    ["P007","Salt 1kg","Groceries",55,38,65,"600100000007","🧂"],
    ["P008","Beans 1kg","Groceries",190,150,18,"600100000008","🫘"],
    ["P009","Fresh Milk 500ml","Dairy & Bakery",65,49,36,"600100000009","🥛"],
    ["P010","Long-life Milk 1L","Dairy & Bakery",115,91,22,"600100000010","🥛"],
    ["P011","White Bread","Dairy & Bakery",75,56,7,"600100000011","🍞"],
    ["P012","Brown Bread","Dairy & Bakery",85,64,11,"600100000012","🍞"],
    ["P013","Margarine 500g","Dairy & Bakery",210,170,9,"600100000013","🧈"],
    ["P014","Eggs Tray (30)","Dairy & Bakery",520,440,6,"600100000014","🥚"],
    ["P015","Bottled Water 1L","Beverages",70,42,52,"600100000015","💧"],
    ["P016","Soda 500ml","Beverages",75,48,40,"600100000016","🥤"],
    ["P017","Fruit Juice 1L","Beverages",180,135,16,"600100000017","🧃"],
    ["P018","Instant Coffee 100g","Beverages",290,230,13,"600100000018","☕"],
    ["P019","Laundry Detergent 1kg","Household",240,185,14,"600100000019","🧺"],
    ["P020","Dishwashing Liquid","Household",130,90,8,"600100000020","🧽"],
    ["P021","Toilet Tissue 10-pack","Household",350,280,21,"600100000021","🧻"],
    ["P022","Floor Cleaner 1L","Household",190,140,0,"600100000022","🧴"],
    ["P023","Bathing Soap","Personal Care",85,55,47,"600100000023","🧼"],
    ["P024","Petroleum Jelly","Personal Care",160,120,12,"600100000024","🫙"],
    ["P025","Toothpaste 100ml","Personal Care",145,105,4,"600100000025","🪥"],
    ["P026","Body Lotion 400ml","Personal Care",420,335,10,"600100000026","🧴"],
    ["P027","Exercise Book A4","Stationery",90,55,32,"600100000027","📓"],
    ["P028","Ballpoint Pen","Stationery",25,12,85,"600100000028","🖊️"],
    ["P029","Pencil Pack","Stationery",60,35,25,"600100000029","✏️"],
    ["P030","Potato Crisps","Snacks",60,35,28,"600100000030","🍟"],
    ["P031","Chocolate Bar","Snacks",100,65,17,"600100000031","🍫"],
    ["P032","Biscuits Family Pack","Snacks",120,80,23,"600100000032","🍪"],
    ["P033","Plastic Storage Box","Other Retail",450,310,5,"600100000033","🧺"],
    ["P034","AA Batteries (4)","Other Retail",220,150,0,"600100000034","🔋"],
    ["P035","Reusable Shopping Bag","Other Retail",80,35,44,"600100000035","🛍️"]
  ];
  const products=seeds.map((s,i)=>({id:s[0],name:s[1],category:s[2],price:s[3],cost:s[4],stock:s[5],barcode:s[6],emoji:s[7],reorder:10,supplierId:"SUP"+((i%6)+1),description:"Everyday quality "+s[1].toLowerCase()+".",imageColor:["#eaf5ef","#f9f1e6","#eef2fa","#f8eeee"][i%4]}));
  const suppliers=[
    {id:"SUP1",name:"FreshMart Distributors",phone:"+254 700 111 101",email:"orders@freshmart.example",products:"Groceries, dairy"},
    {id:"SUP2",name:"Metro Wholesale",phone:"+254 700 111 102",email:"sales@metrowholesale.example",products:"Household, personal care"},
    {id:"SUP3",name:"Nairobi Foods Ltd",phone:"+254 700 111 103",email:"hello@nairobifoods.example",products:"Groceries, snacks"},
    {id:"SUP4",name:"Daily Dairy Supply",phone:"+254 700 111 104",email:"supply@dailydairy.example",products:"Milk, bread, eggs"},
    {id:"SUP5",name:"Office & More",phone:"+254 700 111 105",email:"orders@officeandmore.example",products:"Stationery, other retail"},
    {id:"SUP6",name:"Kifaru General Traders",phone:"+254 700 111 106",email:"sales@kifaru.example",products:"Mixed retail products"}
  ];
  const customers=[
    ["CUS1","Walk-in Customer","+254 700 000 001"],["CUS2","Mary Wanjiku","+254 711 000 102"],["CUS3","Peter Mwangi","+254 722 000 103"],["CUS4","Grace Achieng","+254 733 000 104"],["CUS5","Brian Otieno","+254 744 000 105"],["CUS6","Faith Njeri","+254 755 000 106"],["CUS7","David Kamau","+254 766 000 107"],["CUS8","Lucy Chebet","+254 777 000 108"],["CUS9","James Kiptoo","+254 788 000 109"],["CUS10","Anne Muthoni","+254 799 000 110"],["CUS11","Kevin Maina","+254 700 000 111"],["CUS12","Sarah Atieno","+254 711 000 112"]
  ].map((x,i)=>({id:x[0],name:x[1],phone:x[2],email:i?("customer"+i+"@example.test"):"",purchases:0,spend:0}));
  const promotions=[
    {id:"PR001",title:"Pantry Essentials Week",productId:"P001",discountPrice:145,start:"2026-10-20",end:"2026-11-02",description:"Stock up on everyday pantry essentials.",status:"Active",emoji:"🌽"},
    {id:"PR002",title:"Breakfast Bundle",productId:"P011",discountPrice:65,start:"2026-10-24",end:"2026-10-31",description:"A little saving for your morning routine.",status:"Active",emoji:"🍞"},
    {id:"PR003",title:"Refresh & Save",productId:"P016",discountPrice:60,start:"2026-10-28",end:"2026-11-08",description:"Cool prices on selected refreshments.",status:"Scheduled",emoji:"🥤"},
    {id:"PR004",title:"Clean Home Days",productId:"P019",discountPrice:215,start:"2026-10-01",end:"2026-10-18",description:"Household favourites at special prices.",status:"Expired",emoji:"🧺"},
    {id:"PR005",title:"School Desk Basics",productId:"P027",discountPrice:75,start:"2026-10-22",end:"2026-11-05",description:"Useful stationery for school and work.",status:"Active",emoji:"📓"}
  ];
  const sales=[];
  const baseDate=new Date("2026-10-26T15:30:00");
  for(let i=0;i<20;i++){
    const d=new Date(baseDate);d.setDate(d.getDate()-(i%14));d.setHours(8+(i*3)%10,(i*17)%60,0,0);
    const items=[{productId:"P"+String((i%12)+1).padStart(3,"0"),qty:(i%3)+1},{productId:"P"+String(((i+14)%21)+1).padStart(3,"0"),qty:(i%2)+1}];
    const total=items.reduce((sum,it)=>{const p=products.find(x=>x.id===it.productId);return sum+p.price*it.qty;},0);
    sales.push({id:"TXN-"+String(1001+i),date:d.toISOString(),cashier:["Demo Manager","Cashier A","Cashier B"][i%3],customerId:customers[(i%customers.length)].id,items,total,payment:["Cash","M-Pesa","Card"][i%3],status:i===17?"Canceled":i===19?"Pending":"Completed"});
  }
  const purchases=Array.from({length:8},(_,i)=>({id:"PO-"+String(501+i),supplierId:"SUP"+((i%6)+1),date:new Date(Date.now()-i*86400000*2).toISOString(),items:[{productId:products[(i*3)%products.length].id,qty:10+(i*3),cost:products[(i*3)%products.length].cost}],total:(10+i*3)*products[(i*3)%products.length].cost,status:i===7?"Pending":"Received"}));
  const movements=products.slice(0,10).map((p,i)=>({id:"MOV"+(i+1),date:new Date(Date.now()-i*3600000).toISOString(),productId:p.id,type:i%2?"Sale":"Stock received",qty:i%2?-((i%3)+1):((i%4)+5),reason:i%2?"POS sale":"Opening stock entry"}));
  window.DukaSeed={categories,products,suppliers,customers,promotions,sales,purchases,movements};
})();