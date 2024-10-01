var author="Star"
console.log(author);

var firstname ="Venkatesa";
var lastname="Ram";
var fullname=firstname+lastname;

function getdata(){
    console.log(fullname);
}
getdata();


//GEC
// creation phase

// GEC{
//     LEC{
//         ER{
//             object:
//             declarative:
//                        firstname:undefined;
//                        lastname:undefined;
//             outer:null;
//             this:window object;
//         }
//     }
// }
// execution phase
// GEC{
//     LEC{
//         ER{
//             object:
//             declarative:
//                        firstname:Venkatesa;
//                        lastname:Ram;
//             outer:null;
//             this:window object;
//         }
//     }
// }

// FEC 
// creation phase
// GEC{
//     LEC{
//         ER{
//             object:
//             declarative:
//                        fullname:undefined;
//             outer:GEC;
//             this:getdata();
//         }
//     }
// }
// execution phase
// GEC{
//     LEC{
//         ER{
//             object:
//             declarative:
//                        fullname:Venkatesa Ram;
//             outer:GEC;
//             this:getdata();
//         }
//     }
// }

