import React from 'react'

function Table() {
    const arr = [
        {
          stock: "32 in Stock",
          price: "$ 45.99",
          sales: "20",
          name: "shivam",
          para: "Lorem Ipsum is simply dummy text .",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6-DQF2pBwNFV9KzPafu9RghrNF1tZ8J3AA&usqp=CAU",
        },
        {
          stock: "32 in Stock",
          price: "$ 45.99",
          sales: "20",
          name: "manish",
          para: "Lorem Ipsum is simply dummy text .",
          image: "https://img.freepik.com/premium-photo/landscape-high-icy-mountains-near-lake-digital-art-generative-ai_665346-37252.jpg",
        },
      ];
  return (
    <div className="footercontainer">
        <div className="infooter">
          <h2>Prouct Sale</h2>
          <div className='footerright'>
            <input  className="colertext" type="search" placeholder="search" />
            <select className="colertext">
              <option>Last 30 day </option>
              <option>Last 15 day </option>
            </select>
          </div>
        </div>
        <table className="table">
          <thead className="colertext">
            <tr className="tablerow">
              <th className="product">Product Name </th>
              <th>Stock</th>
              <th>Price</th>
              <th>Total sales</th>
            </tr>
          </thead>
          <hr />
          <tbody>
            {arr.map((el, key) => (
              <tr key={key} className="tablerow">
                <td className="product image"><img src={el.image} alt='photo' className='photo'/> <p className='para'><span className='fontweight'>{el.name}</span> 
                <span className="colertext">{el.para}</span></p>  </td>
                <td>{el.stock}</td>
                <td className='fontweight'>{el.price}</td>
                <td>{el.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default Table