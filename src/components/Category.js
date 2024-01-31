import './Category.css';
function Category({filterdata,category,setcategory}){
  function filterHandler(data){
    setcategory(data);
  }
  return(
<div className="category_background"> 
  <div className="category_field">
  {filterdata.map((data) => (
          <button key={data.title} style={{ borderColor: category === data.title ? 'white' : '#00000066' }} onClick={()=>filterHandler(data.title)}>{data.title}</button>
        ))}
  </div>
  </div>
  );
}
export default Category;