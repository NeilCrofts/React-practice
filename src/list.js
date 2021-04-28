const list=[1,2,3,4,5]
const listItem = list.map((number)=>
    <li key={number.toString()}>{number*3}</li>
)
function List(props) {
    return(
        <ul>{listItem}</ul>
    )
}
//或者
// function List(props) {
//     return(
//         <ul>{list.map((number)=>
//             <li key={number.toString()}>{number*3}</li>}</ul>
//     )
// }
export default List