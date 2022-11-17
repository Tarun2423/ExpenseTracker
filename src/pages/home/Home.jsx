import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import AddBoxIcon from '@mui/icons-material/AddBox';

const Home = () => {
  const handleClick = () => { };
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <div className="addexpense">
            <div className="title">
            <h1>Add Expenses</h1>
            <AddBoxIcon className="icon" onclick={handleClick}/>
            </div>
            <div className="inputdetails">
              <div className="first">
              <input  type="text" id="category" />
              <label htmlFor="category">Category</label>
              <input   type="text" id="amount" />
              <label htmlFor="amount">Amount</label>
              </div>
              <div className="second">
              <input   type="date" id="Date" />
              <label htmlFor="Date">Date</label>
              <input   type="text" id="desc" />
              <label htmlFor="desc">Description</label>
              </div>
              <button className="button">Submit</button>
            </div>
          </div>
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Expenses)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
