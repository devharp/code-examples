let data = {
    "date": "22-01-2021",
    "time": "12:03:14",
    "name": "John Wick",
    "id": "57FA34EF23",
    "contactno": 9898989898,
    "address": "Place where this guy lives and his complete address",
    "info": "Overall description about the entire invoice",
    "items": [{
        "id": "4582",
        "name": "Dosa",
        "quantity": 2,
        "price": 50,
        "subtotal": 100,
        "info": "specific description about Dosa item only"
    }, {
        "id": "4572",
        "name": "Idli",
        "quantity": 5,
        "price": 30,
        "subtotal": 150,
        "info": "specific description about Idli item only"
    }, {
        "id": "4542",
        "name": "Vada",
        "quantity": 10,
        "price": 30,
        "subtotal": 300,
        "info": "specific description about Vada only"
    }, {
        "id": "4582",
        "name": "Dosa",
        "quantity": 2,
        "price": 50,
        "subtotal": 100,
        "info": "specific description about Dosa item only"
    }, {
        "id": "4572",
        "name": "Idli",
        "quantity": 5,
        "price": 30,
        "subtotal": 150,
        "info": "specific description about Idli item only"
    }, {
        "id": "4542",
        "name": "Vada",
        "quantity": 10,
        "price": 30,
        "subtotal": 300,
        "info": "specific description about Vada only"
    }, {
        "id": "4582",
        "name": "Dosa",
        "quantity": 2,
        "price": 50,
        "subtotal": 100,
        "info": "specific description about Dosa item only"
    }, {
        "id": "4572",
        "name": "Idli",
        "quantity": 5,
        "price": 30,
        "subtotal": 150,
        "info": "specific description about Idli item only"
    }, {
        "id": "4542",
        "name": "Vada",
        "quantity": 10,
        "price": 30,
        "subtotal": 300,
        "info": "specific description about Vada only"
    }, {
        "id": "4582",
        "name": "Dosa",
        "quantity": 2,
        "price": 50,
        "subtotal": 100,
        "info": "specific description about Dosa item only"
    }, {
        "id": "4572",
        "name": "Idli",
        "quantity": 5,
        "price": 30,
        "subtotal": 150,
        "info": "specific description about Idli item only"
    }, {
        "id": "4542",
        "name": "Vada",
        "quantity": 10,
        "price": 30,
        "subtotal": 300,
        "info": "specific description about Vada only"
    }, {
        "id": "4582",
        "name": "Dosa",
        "quantity": 2,
        "price": 50,
        "subtotal": 100,
        "info": "specific description about Dosa item only"
    }, {
        "id": "4572",
        "name": "Idli",
        "quantity": 5,
        "price": 30,
        "subtotal": 150,
        "info": "specific description about Idli item only"
    }, {
        "id": "4542",
        "name": "Vada",
        "quantity": 10,
        "price": 30,
        "subtotal": 300,
        "info": "specific description about Vada only"
    }, {
        "id": "4582",
        "name": "Dosa",
        "quantity": 2,
        "price": 50,
        "subtotal": 100,
        "info": "specific description about Dosa item only"
    }, {
        "id": "4572",
        "name": "Idli",
        "quantity": 5,
        "price": 30,
        "subtotal": 150,
        "info": "specific description about Idli item only"
    }, {
        "id": "4542",
        "name": "Vada",
        "quantity": 10,
        "price": 30,
        "subtotal": 300,
        "info": "specific description about Vada only"
    }, {
        "id": "4572",
        "name": "Idli",
        "quantity": 5,
        "price": 30,
        "subtotal": 150,
        "info": "specific description about Idli item only"
    }, {
        "id": "4542",
        "name": "Vada",
        "quantity": 10,
        "price": 30,
        "subtotal": 300,
        "info": "specific description about Vada only"
    }, {
        "id": "4572",
        "name": "Idli",
        "quantity": 5,
        "price": 30,
        "subtotal": 150,
        "info": "specific description about Idli item only"
    }, {
        "id": "4542",
        "name": "Vada",
        "quantity": 10,
        "price": 30,
        "subtotal": 300,
        "info": "specific description about Vada only"
    }, {
        "id": "4572",
        "name": "Idli",
        "quantity": 5,
        "price": 30,
        "subtotal": 150,
        "info": "specific description about Idli item only"
    }, ],
    "amount": { "total": 550, "paid": 0, "due": 550 }
}

function generateSVG(payload_bill_pdf_svg) {
    console.log(payload_bill_pdf_svg.items.length);

    let result = '\
    <style>\
        #info {\
            transform: translate(15px, 15mm);\
        }\
\
        #amount {\
            transform: translate(calc(100% - 15px), 15mm);\
        }\
\
        #items {\
            transform: translate(15px, 30%);\
        }\
\
        #lines {\
            height: 1px;\
            width: calc(100% - 30px);\
            stroke: none;\
            fill: black;\
        }\
\
        .items-table-heading{\
\
            font-size: 17px;\
        }\
        text {\
            font-family: sans-serif;\
            font-size: 15px;\
            font-weight: 600;\
            fill: black;\
            stroke: none;\
\
        }\
    </style>\
    <rect height="297mm" width="210mm" fill="white" />\
    <g id="info">\
\
        <text x="0" y="0" style="transform: translateY(calc(0 * (2.5 * 8px)));" dominant-baseline="hanging">Name:\
            ' + payload_bill_pdf_svg.name + '</text>\
        <text x="0" y="0" style="transform: translateY(calc(1 * (2.5 * 1ch)));" dominant-baseline="hanging">Id:\
            ' + payload_bill_pdf_svg.id + '</text>\
        <text x="0" y="0" style="transform: translateY(calc(2 * (2.5 * 1ch)));" dominant-baseline="hanging">Contact\
            No: +91 ' + payload_bill_pdf_svg.contactno + '</text>\
        <text x="0" y="0" style="transform: translateY(calc(3 * (2.5 * 1ch)));" dominant-baseline="hanging">Address:\
            ' + payload_bill_pdf_svg.address + '</text>\
        <text x="0" y="0" style="transform: translateY(calc(4 * (2.5 * 1ch)));" dominant-baseline="hanging">\
            Info: ' + payload_bill_pdf_svg.info + '</text>\
        <text x="0" y="0" style="transform: translateY(calc(5 * (2.5 * 1ch)));" dominant-baseline="hanging">\
            Total Items: ' + payload_bill_pdf_svg.items.length + '</text>\
\
\
    </g>\
    <g id="amount">\
        <text x="0" y="0" style="transform: translateY(calc(0 * (2.5 * 1ch)));" dominant-baseline="hanging"\
            text-anchor="end">Total Amount: ' + payload_bill_pdf_svg.amount.total + '</text>\
        <text x="0" y="0" style="transform: translateY(calc(1 * (2.5 * 1ch)));" dominant-baseline="hanging"\
            text-anchor="end">Due: ' + payload_bill_pdf_svg.amount.due + ', Paid: ' + payload_bill_pdf_svg.amount.paid + '</text>\
        <text x="0" y="0" style="transform: translateY(calc(3 * (2.5 * 1ch)));" dominant-baseline="hanging"\
            text-anchor="end">Date: ' + payload_bill_pdf_svg.date + '</text>\
        <text x="0" y="0" style="transform: translateY(calc(4 * (2.5 * 1ch)));" dominant-baseline="hanging"\
            text-anchor="end">Time: ' + payload_bill_pdf_svg.time + '</text>\
    </g>\
    <g id="items">\
\
        <!-- Initial -->\
        <text x="0" y="0" class="items-table-heading" style="transform: translateY(calc(1 * (3 * 1ch)));" dominant-baseline="hanging">\
        Item Name</text>\
        <text x="0" y="0" class="items-table-heading" style="transform: translateY(calc(1 * (3 * 1ch))) translateX(calc(0.33*100%));"\
            text-anchor="middle" dominant-baseline="hanging">Price</text>\
        <text x="0" y="0" class="items-table-heading" style="transform: translateY(calc(1 * (3 * 1ch))) translateX(calc(0.66*100%));"\
            text-anchor="middle" dominant-baseline="hanging">Quantity</text>\
        <text x="0" y="0" class="items-table-heading" style="transform: translateY(calc(1 * (3 * 1ch))) translateX(calc(100% - 30px));"\
            text-anchor="end" dominant-baseline="hanging">Sub Total</text>\
        <rect id="lines" style="transform: translateY(calc(calc(3 * (3 * 1ch)) - 2px));" />\n';

    let i, gap = '9px';
    for (i = 0; i < payload_bill_pdf_svg.items.length; i++) {
        let e = payload_bill_pdf_svg.items[i];
        result += '<!-- 0 -->\
        <text x="0" y="0" style="transform: translateY(calc(calc(calc(' + i + ' + 3) * (3 * ' + gap + ')) - 0px));"\
            dominant-baseline="hanging">' + e.name + '</text>\
        <text x="0" y="0" style="transform: translateY(calc(calc(' + i + ' + 3) * (3 * ' + gap + '))) translateX(calc(0.33*100%));"\
            text-anchor="middle" dominant-baseline="hanging">' + e.price + '</text>\
        <text x="0" y="0" style="transform: translateY(calc(calc(' + i + ' + 3) * (3 * ' + gap + '))) translateX(calc(0.66*100%));"\
            text-anchor="middle" dominant-baseline="hanging">' + e.quantity + '</text>\
        <text x="0" y="0" style="transform: translateY(calc(calc(' + i + ' + 3) * (3 * ' + gap + '))) translateX(calc(100% - 30px));"\
            text-anchor="end" dominant-baseline="hanging">' + e.subtotal + '</text>\
        <rect id="lines" style="transform: translateY(calc(calc(calc(' + i + ' + 4) * (3 * ' + gap + ')) - 9px));" />\n';
    }

    result += '<!-- End-->\
        <text x="0" y="0" style="transform: translateY(calc(calc(' + i + ' + 3) * (3 * ' + gap + '))) translateX(calc(100% - 30px));"\
            text-anchor="end" dominant-baseline="hanging">550</text>\
        <text x="0" y="0" style="transform: translateY(calc(calc(calc(' + i + ' + 3) * (3 * ' + gap + ')) - 0px));"\
            dominant-baseline="hanging">Total</text>\
    </g>';

    return result;
}

document.querySelector('#bill').innerHTML = generateSVG(data);
window.print();