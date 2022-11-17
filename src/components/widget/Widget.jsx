import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;
  // const [amount,setamount]=useState(0)
  // useEffect(()=>{
  //     const getAmount=async()=>{
  //         let isActive = true;
  //     await axios.get("http://localhost:5000/user/allusers")
  //     .then(response=>{if(isActive)setamount(response.data)})
  //     .catch(err=>console.error(err))

  //         }
  // getAmount()
  // },[])

  
  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
   
    case "balance":
      data = {
        title: "Wallet",
        isMoney: true,
        link: "view details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney } {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
