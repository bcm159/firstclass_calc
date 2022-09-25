import Volume from './components/Volume';
import Len_volume from './components/Length_Volume';
import Eu_Delivery from './delivery/Eu_delivery';
import Usa_delivery from './delivery/Usa_delivery';
import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";

function App() {

    const[getAPI,setGetAPI] = useState('');
    const [todaydate,setTodayDate] = useState('');
    const [geturl,setGeturl] = useState('');
    const [exchangeList,setExchangeList] = useState([]);
    const [euPrice,setEuPrice] = useState(1400);
    const [usPrice,setUsPrice] = useState(1410);
    const [euNumPrice,setNumEuPrice] = useState(1400);
    const [usNumPrice,setNumUsPrice] = useState(1410);

    const [euwonCost,seteuWonCost] = useState(0);
    const [uswonCost,setusWonCost] = useState(0);

    const [comp_eu_w,setComp_eu_w] = useState(0);
    const [comp_eu_v,setComp_eu_v] = useState(0);

    const [comp_us_w,setComp_us_w] = useState(0);
    const [comp_us_v,setComp_us_v] = useState(0);

    //배송비
    const [eu_delivery_price,setEu_delivery_price] = useState(0);
    const [us_delivery_price,setUs_delivery_price] = useState(0);

    const callApi = async()=>{
      axios.get("/api").then((res)=>{setGetAPI(res.data)});
    };
    useEffect(()=>{
      callApi();
    }, []);

    //callapi 상태 확인
    let result_api = getAPI;

    const onChangeEuWonCost = (e) =>{
      let won_euPrice = ((Number(e.target.value) * euPrice).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setNumEuPrice((Number(e.target.value) * euPrice).toFixed(2));
      seteuWonCost(won_euPrice);
    }

    const onChangeUsWonCost = (e) => {
      let won_usPrice = ((Number(e.target.value) * usPrice*1.07).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setusWonCost(won_usPrice);
      setNumUsPrice((Number(e.target.value) * usPrice*1.07).toFixed(2));
    }

    const getDate = () => {
      var date = new Date();
      var year = date.getFullYear();
      var month = ("0" + (1 + date.getMonth())).slice(-2);
      var day = ("0" + date.getDate()).slice(-2);
      var result_date = year + month + day;
      var url ='korea/site/program/financial/exchangeJSON?authkey=MXuMd56F9xZeEkKrd13R9QUOKSsEYLpa&searchdate='+result_date+'&data=AP01';
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

    const onChangeEuExPrice = (e) => {
      setEuPrice(Number(e.target.value));
    }

    const onChangeUsExPrice = (e) => {
      setUsPrice(Number(e.target.value));
    }


    const eugetWeight = (w) =>{
      setComp_eu_w(w);
    }
    const usgetWeight = (w) =>{
      setComp_us_w(w);
    }

    const eugetVolume = (v) =>{
      setComp_eu_v(v);
    }
    const usgetVolume = (v) =>{
      setComp_us_v(v);
    }

    //EU 무게 비교
    let eu_last_volume = 0
    const compEu = (comp_eu_w,comp_eu_v) =>{
      let num_a = Number(comp_eu_w);
      let num_b = Number(comp_eu_v);
      if(num_a > num_b){
        eu_last_volume = num_a;
      }else if (num_a <= num_b){
        eu_last_volume = num_b;
      }
    }
    compEu(comp_eu_w,comp_eu_v);

    //usa 무게 비교
    let us_last_volume = 0
    const compUs = (comp_us_w,comp_us_v) =>{
      let num_a = Number(comp_us_w);
      let num_b = Number(comp_us_v);
      if(num_a > num_b){
        us_last_volume = num_a;
      }else if (num_a <= num_b){
        us_last_volume = num_b;
      }
    }
    compUs(comp_us_w,comp_us_v);
    
    //EU 가격 얻어오기
    const eu_get_deliv_price = (price) =>{
      setEu_delivery_price(price);
    }
    const us_get_deliv_price = (price) =>{
      setUs_delivery_price(price);
    }
    
    

  return (
    <div className="App">
      <div className='exchangeInfo'> 
        {/* <span className='eu_result_exchange'>{exchangeList[0]&&exchangeList[0].price}달러</span>
        <span className='us_result_exchange'>{exchangeList[1]&&exchangeList[1].price}유로</span> */}
        <div className='exchange_price' id='eu_ex_pr'>
          <p>독일 환율</p>
          {getAPI ==='' ? <input className='exch_price' onChange={onChangeEuExPrice}/> : <span className='eu_result_exchange'>{getAPI[0]&&getAPI[0].rate}달러</span>}
        </div>
        <div className='exchange_price' id='us_ex_pr'>
          <p>미국 환율</p>
          {getAPI ==='' ? <input className='exch_price' onChange={onChangeUsExPrice}/> : <span className='us_result_exchange'>{getAPI[2]&&getAPI[2].rate}유로</span>}
        </div>
      
      </div>
      <div className='indiv'>
          <div className='germany'>
              <h1>독일</h1>
              <span>원가 입력 : </span>
              <input 
                type="text"
                onChange={onChangeEuWonCost}
              />
              <p>{euwonCost}원</p>
          </div>
          <div className='america'>
              <h1>미국</h1>
              <span>원가 입력 : </span>
              <input 
                type="text"
                onChange={onChangeUsWonCost}
              />
              <p>{uswonCost}원</p>
              <p>(7% 세금 포함)</p>
          </div>
      </div>
      <Volume eugetWeight = {eugetWeight} usgetWeight={usgetWeight}/>
      <Len_volume eugetVolume = {eugetVolume} usgetVolume={usgetVolume} us_getweigt={comp_us_w}/>
      <div className='last_result_div'>
        <Eu_Delivery result_eu_volume={eu_last_volume} eu_get_deliv_price={eu_get_deliv_price} euNumPrice={euNumPrice}/>
        <Usa_delivery result_us_volume={us_last_volume} us_get_deliv_price={us_get_deliv_price} usNumPrice={usNumPrice} usPrice={usPrice}/>
      </div>
    </div>
  );
}

export default App;
