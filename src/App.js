import Volume from './components/Volume';
import Len_volume from './components/Length_Volume';
import Eu_Delivery from './delivery/Eu_delivery';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [todaydate,setTodayDate] = useState('');
    const [geturl,setGeturl] = useState('');
    const [exchangeList,setExchangeList] = useState([]);
    const [euPrice,setEuPrice] = useState('');
    const [usPrice,setUsPrice] = useState('');

    const [euwonCost,seteuWonCost] = useState(0);
    const [uswonCost,setusWonCost] = useState(0);

    const [comp_eu_w,setComp_eu_w] = useState(0);
    const [comp_eu_v,setComp_eu_v] = useState(0);

    const [eu_delivery_price,setEu_delivery_price] = useState(0);

    const onChangeEuWonCost = (e) =>{
      let won_euPrice = (Number(e.target.value) * euPrice).toFixed(2);
      seteuWonCost(won_euPrice);
    }

    const onChangeUsWonCost = (e) => {
      let won_usPrice = (Number(e.target.value) * usPrice).toFixed(2);
      setusWonCost(won_usPrice);
    }

    const getDate = () => {
      var date = new Date();
      var year = date.getFullYear();
      var month = ("0" + (1 + date.getMonth())).slice(-2);
      var day = ("0" + date.getDate()).slice(-2);
      var result_date = year + month + day;
      // var url ='korea/site/program/financial/exchangeJSON?authkey=MXuMd56F9xZeEkKrd13R9QUOKSsEYLpa&searchdate='+result_date+'&data=AP01';
      var url ='https://www.koreaexim.go.kr/korea/site/program/financial/exchangeJSON?authkey=MXuMd56F9xZeEkKrd13R9QUOKSsEYLpa&searchdate='+result_date+'&data=AP01';
      return url;
      
    }

    const adapriceAPI = async() =>{
      let get_url = getDate(); 
      
      let priceArray = [];
      //const res = await fetch('korea/site/program/financial/exchangeJSON?authkey=MXuMd56F9xZeEkKrd13R9QUOKSsEYLpa&searchdate=20220915&data=AP01')
      const res = await fetch(get_url)
      .then((res) => res.json());
      let us_num = res.findIndex(v=>v.cur_nm === "미국 달러");
      let eu_num = res.findIndex(v=>v.cur_nm === "유로");
      priceArray.push(
      {
        name : 'usd',
        price : res[us_num]['deal_bas_r']
      });
      priceArray.push(
        {
          name : 'eur',
          price : res[eu_num]['deal_bas_r']
        });
      setEuPrice(res[eu_num]['deal_bas_r'].replace(',',''));
      setUsPrice(res[us_num]['deal_bas_r'].replace(',',''));
      setExchangeList(priceArray);
      
    }
    useEffect(() => {
      adapriceAPI();
    },[]);


    const getWeight = (w) =>{
      setComp_eu_w(w);
    }

    const getVolume = (v) =>{
      setComp_eu_v(v);
    }

    let last_volume = 0
    const compEu = (comp_eu_w,comp_eu_v) =>{
      let num_a = Number(comp_eu_w);
      let num_b = Number(comp_eu_v);
      if(num_a > num_b){
        last_volume = num_a;
      }else if (num_a <= num_b){
        last_volume = num_b;
      }
    }
    compEu(comp_eu_w,comp_eu_v);
    
    const get_deliv_price = (price) =>{
      setEu_delivery_price(price);
    }
    
  return (
    <div className="App">
      <div className='exchangeInfo'>
        
        <span className='eu_result_exchange'>{exchangeList[0]&&exchangeList[0].price}달러</span>
        <span className='us_result_exchange'>{exchangeList[1]&&exchangeList[1].price}유로</span>
        
      </div>
      <div className='indiv'>
          <div className='germany'>
              <p>코인</p>
              <span>원가 입력 : </span>
              <input 
                type="text"
                onChange={onChangeEuWonCost}
              />
              <p>{euwonCost}</p>
          </div>
          <div className='america'>
              <p>주가</p>
              <span>원가 입력 : </span>
              <input 
                type="text"
                onChange={onChangeUsWonCost}
              />
              <p>{uswonCost}</p>
          </div>
      </div>
      <Volume getWeight = {getWeight}/>
      <Len_volume getVolume = {getVolume}/>
      <Eu_Delivery result_eu_volume={last_volume} get_deliv_price={get_deliv_price} />
      <p>최종 무게 : {last_volume}</p>
    </div>
  );
}

export default App;
