import React, { useState } from 'react';
import './../css/style.css';

const Length_Volume = ({eugetVolume,usgetVolume,us_getweigt}) => {
    
    const [changeEuUnit,setChangeEuUnit] = useState('');
    const [changeUsUnit,setChangeUsUnit] = useState('');

    const [eulength_w,setEuLength_w] = useState(0);
    const [eulength_l,setEuLength_l] = useState(0);
    const [eulength_h,setEuLength_h] = useState(0);
    const [const_eulength_w,setConst_EuLength_w] = useState(0);
    const [const_eulength_l,setConst_EuLength_l] = useState(0);
    const [const_eulength_h,setConst_EuLength_h] = useState(0);

    const [uslength_w,setUsLength_w] = useState(0);
    const [uslength_l,setUsLength_l] = useState(0);
    const [uslength_h,setUsLength_h] = useState(0);
    const [const_uslength_w,setConst_UsLength_w] = useState(0);
    const [const_uslength_l,setConst_UsLength_l] = useState(0);
    const [const_uslength_h,setConst_UsLength_h] = useState(0);


    //in 무게 위한 길이 저장
    const [usInlength_w,setInUsLength_w] = useState(0);
    const [usInlength_l,setInUsLength_l] = useState(0);
    const [usInlength_h,setInUsLength_h] = useState(0);
    const [const_usInlength_w,setConst_InUsLength_w] = useState(0);
    const [const_usInlength_l,setConst_InUsLength_l] = useState(0);
    const [const_usInlength_h,setConst_InUsLength_h] = useState(0);

    const us_weight = us_getweigt;

    const in_cm = 2.54;
    const ft_cm = 30.48;
    const mm_cm = 0.1;

    const onChangeEuUnit = (e) =>{
        setChangeEuUnit(e.target.value);
    }
    const onChangeUsUnit = (e) =>{
        setChangeUsUnit(e.target.value);
    }

    //유럽 길이
    const onChangeEuLenW = (e) =>{
        let len_sample_w = e.target.value;
        
        if(changeEuUnit === 'ft'){
            setEuLength_w((len_sample_w * ft_cm).toFixed(2));
            setConst_EuLength_w((len_sample_w * ft_cm).toFixed(2));
        }
        else if(changeEuUnit === 'in'){
            setEuLength_w((len_sample_w * in_cm).toFixed(2));
            setConst_EuLength_w((len_sample_w * in_cm).toFixed(2));
        }
        else if(changeEuUnit === 'mm'){
            setEuLength_w((len_sample_w * mm_cm).toFixed(2));
            setConst_EuLength_w((len_sample_w * mm_cm).toFixed(2));
        }
        else{
            setEuLength_w(len_sample_w);
            setConst_EuLength_w(len_sample_w);
        }
    }
    const onChangeEuLenL = (e) =>{
        let len_sample_l = e.target.value;
        if(changeEuUnit === 'ft'){
            setEuLength_l((len_sample_l * ft_cm).toFixed(2));
            setConst_EuLength_l((len_sample_l * ft_cm).toFixed(2));
        }
        else if(changeEuUnit === 'in'){
            setEuLength_l((len_sample_l * in_cm).toFixed(2));
            setConst_EuLength_l((len_sample_l * in_cm).toFixed(2));
        }
        else if(changeEuUnit === 'mm'){
            setEuLength_l((len_sample_l * mm_cm).toFixed(2));
            setConst_EuLength_l((len_sample_l * mm_cm).toFixed(2));
        }
        else{
            setEuLength_l(len_sample_l);
            setConst_EuLength_l(len_sample_l);
        }
    }
    const onChangeEuLenH = (e) =>{
        let len_sample_h = e.target.value;
        if(changeEuUnit === 'ft'){
            setEuLength_h((len_sample_h * ft_cm).toFixed(2));
            setConst_EuLength_h((len_sample_h * ft_cm).toFixed(2));
        }
        else if(changeEuUnit === 'in'){
            setEuLength_h((len_sample_h * in_cm).toFixed(2));
            setConst_EuLength_h((len_sample_h * in_cm).toFixed(2));
        }
        else if(changeEuUnit === 'mm'){
            setEuLength_h((len_sample_h * mm_cm).toFixed(2));
            setConst_EuLength_h((len_sample_h * mm_cm).toFixed(2));
        }
        else{
            setEuLength_h(len_sample_h);
            setConst_EuLength_h(len_sample_h);
        }
    }

    const onChangeEuExtra = (e) =>{
        let extra_length = Number(e.target.value);
        if(extra_length === 0){
            setEuLength_w(const_eulength_w);
            setEuLength_l(const_eulength_l);
            setEuLength_h(const_eulength_h);
        } else{
            let total_length_w = extra_length + Number(eulength_w);
            let total_length_l = extra_length + Number(eulength_l);
            let total_length_h = extra_length + Number(eulength_h);
            setEuLength_w(total_length_w);
            setEuLength_l(total_length_l);
            setEuLength_h(total_length_h);
        }
          
    }
    const onChangeUsExtra = (e) =>{
        let extra_length = Number(e.target.value);
        let extra_in_length = extra_length * 0.394;

        if(extra_length === 0){
            setUsLength_w(const_uslength_w);
            setUsLength_l(const_uslength_l);
            setUsLength_h(const_uslength_h);

            setInUsLength_w(const_usInlength_w);
            setInUsLength_l(const_usInlength_l);
            setInUsLength_h(const_usInlength_h);
        } else{
            let total_length_w = extra_length + Number(const_uslength_w);
            let total_length_l = extra_length + Number(const_uslength_l);
            let total_length_h = extra_length + Number(const_uslength_h);
            setUsLength_w(total_length_w.toFixed(2));
            setUsLength_l(total_length_l.toFixed(2));
            setUsLength_h(total_length_h.toFixed(2));
            

            let total_Inlength_w = extra_in_length + Number(const_usInlength_w);
            let total_Inlength_l = extra_in_length + Number(const_usInlength_l);
            let total_Inlength_h = extra_in_length + Number(const_usInlength_h);
            setInUsLength_w(total_Inlength_w.toFixed(2));
            setInUsLength_l(total_Inlength_l.toFixed(2));
            setInUsLength_h(total_Inlength_h.toFixed(2));
            
        }
          
    }



    const cm_in = 0.394;
    const mm_in = 0.0394;
    const ft_in = 12;
    //setInUsLength_w(len_sample_w);
    
    //미국 길이
    const onChangeUsLenW = (e) =>{
        let len_sample_w = e.target.value;
        if(changeUsUnit === 'ft'){
            setUsLength_w((len_sample_w * ft_cm).toFixed(2));
            setConst_UsLength_w((len_sample_w * ft_cm).toFixed(2));
            setInUsLength_w((len_sample_w * ft_in).toFixed(2));
            setConst_InUsLength_w((len_sample_w * ft_in).toFixed(2));
        }
        else if(changeUsUnit === 'in'){
            setUsLength_w((len_sample_w * in_cm).toFixed(2));
            setConst_UsLength_w((len_sample_w * in_cm).toFixed(2));
            setInUsLength_w((len_sample_w));
            setConst_InUsLength_w((len_sample_w));
        }
        else if(changeUsUnit === 'mm'){
            setUsLength_w((len_sample_w * mm_cm).toFixed(2));
            setConst_UsLength_w((len_sample_w * mm_cm).toFixed(2));
            setInUsLength_w((len_sample_w * mm_in).toFixed(2));
            setConst_InUsLength_w((len_sample_w * mm_in).toFixed(2));
        }
        else if(changeUsUnit === 'cm'){
            setUsLength_w(len_sample_w);
            setConst_UsLength_w(len_sample_w);
            setInUsLength_w((len_sample_w*cm_in).toFixed(2));
            setConst_InUsLength_w((len_sample_w*cm_in).toFixed(2));
        }
        else{
            setUsLength_w(len_sample_w);
            setConst_UsLength_w(len_sample_w);
            setInUsLength_w(len_sample_w);
            setConst_InUsLength_w(len_sample_w);
        }
    }
    const onChangeUsLenL = (e) =>{
        let len_sample_l = e.target.value;
        if(changeUsUnit === 'ft'){
            setUsLength_l((len_sample_l * ft_cm).toFixed(2));
            setConst_UsLength_l((len_sample_l * ft_cm).toFixed(2));
            setInUsLength_l((len_sample_l * ft_in).toFixed(2));
            setConst_InUsLength_l((len_sample_l * ft_in).toFixed(2));
        }
        else if(changeUsUnit === 'in'){
            setUsLength_l((len_sample_l * in_cm).toFixed(2));
            setConst_UsLength_l((len_sample_l * in_cm).toFixed(2));
            setInUsLength_l(len_sample_l);
            setConst_InUsLength_l(len_sample_l);
        }
        else if(changeUsUnit === 'mm'){
            setUsLength_l((len_sample_l * mm_cm).toFixed(2));
            setConst_UsLength_l((len_sample_l * mm_cm).toFixed(2));
            setInUsLength_l((len_sample_l * mm_in).toFixed(2));
            setConst_InUsLength_l((len_sample_l * mm_in).toFixed(2));
        }
        else if(changeUsUnit === 'cm'){
            setUsLength_l(len_sample_l);
            setConst_UsLength_l(len_sample_l);
            setInUsLength_l((len_sample_l * cm_in).toFixed(2));
            setConst_InUsLength_l((len_sample_l * cm_in).toFixed(2));
        }
        else{
            setUsLength_l(len_sample_l);
            setConst_UsLength_l(len_sample_l);
            setInUsLength_l(len_sample_l);
            setConst_InUsLength_l(len_sample_l);
        }
    }
    const onChangeUsLenH = (e) =>{
        let len_sample_h = e.target.value;
        if(changeUsUnit === 'ft'){
            setUsLength_h((len_sample_h * ft_cm).toFixed(2));
            setConst_UsLength_h((len_sample_h * ft_cm).toFixed(2));
            setInUsLength_h((len_sample_h * ft_in).toFixed(2));
            setConst_InUsLength_h((len_sample_h * ft_in).toFixed(2));
        }
        else if(changeUsUnit === 'in'){
            setUsLength_h((len_sample_h * in_cm).toFixed(2));
            setConst_UsLength_h((len_sample_h * in_cm).toFixed(2));
            setInUsLength_h(len_sample_h);
            setConst_InUsLength_h(len_sample_h);
        }
        else if(changeUsUnit === 'mm'){
            setUsLength_h((len_sample_h * mm_cm).toFixed(2));
            setConst_UsLength_h((len_sample_h * mm_cm).toFixed(2));
            setInUsLength_h((len_sample_h * mm_in).toFixed(2));
            setConst_InUsLength_h((len_sample_h * mm_in).toFixed(2));
        }
        else if(changeUsUnit === 'cm'){
            setUsLength_h(len_sample_h);
            setConst_UsLength_h(len_sample_h);
            setInUsLength_h((len_sample_h * cm_in).toFixed(2));
            setConst_InUsLength_h((len_sample_h * cm_in).toFixed(2));
        }
        else{
            setUsLength_h(len_sample_h);
            setConst_UsLength_h(len_sample_h);
            setInUsLength_h(len_sample_h);
            setConst_InUsLength_h(len_sample_h);
        }
    }

    let eu_ing_len_v = eulength_w * eulength_l * eulength_h;
    let eu_result_len_v = 0
    if(eu_ing_len_v !==0){
        eu_result_len_v = (eu_ing_len_v / 6000).toFixed(2);
    }

    let us_ing_len_v = usInlength_w * usInlength_l * usInlength_h;
    let us_result_len_v = 0;
    if(us_ing_len_v !==0){
        us_result_len_v = (us_ing_len_v / 166).toFixed(2);
    }
    let us_kg_result_len_v = 0;
    if(us_result_len_v !==0){
        us_kg_result_len_v = (us_result_len_v * 0.454).toFixed(2);
    }

     //직구 배송 무게 결정 알고리즘
     let result_v_us = 0;
     let deliv_num = 0;
     var v_first = 0;
     var comp_vw = 0;
     var half_v = 0;
     var plus_w = 0;
    const us_deter_deliver_w = async(w,l,h,volume,weight) =>{
        //1. 9lb < = 부피무게 <= 16lb
        
        comp_vw =(Math.abs(volume - weight)).toFixed(2);
        half_v = volume * 0.5;
        plus_w = weight + 10;
        if(9 <= volume && volume <= 16){
          v_first = volume * 0.8;
          if(v_first>=weight){
            result_v_us = v_first.toFixed(2);
            deliv_num = 1;
          }
          else if(v_first<weight){
            result_v_us = weight.toFixed(2);
            deliv_num = 1;
          }
        } 

        else if(0 < volume && volume < 9){
        //2. 부피 무게 <= 9lb
          if(comp_vw < 5){
            result_v_us = weight.toFixed(2);
            deliv_num = 2;
          }
          else{
            if(volume>=weight){
                result_v_us = volume.toFixed(2);
                deliv_num = 2;
            }
            else{
                result_v_us = weight.toFixed(2);
                deliv_num = 2;
            }
          }
        } 
        
        else{
        //3. 부피무게 >= 16lb
          if(w >40 || l >40 || h>40){
            result_v_us = volume.toFixed(2);
            deliv_num = 3;
          }
  
          if(half_v >= plus_w){
            result_v_us = half_v.toFixed(2);
            deliv_num = 3;
          }
          else{
            result_v_us = plus_w.toFixed(2);
            deliv_num = 3;
          }
         
        }
      }
      
    us_deter_deliver_w(Number(usInlength_w),Number(usInlength_l),Number(usInlength_h),Number(us_result_len_v),Number(us_weight));
    
    eugetVolume(eu_result_len_v);
    usgetVolume(result_v_us);
    return (
        <div>
            <p>피트 : ft, 인치 : in, 미리미터 : mm, 센티미터 : cm</p>
            <div className='vol_indiv'>
                <div className='germany_len_vol'>
                    <span>단위 입력</span>
                    <input 
                        type="text"
                        onChange={onChangeEuUnit}
                        className="len_unit"
                        maxlength='2'
                    />
                    <div>
                        <span className='length_sp'>길이 입력</span>
                        <input 
                            type="text"
                            onChange={onChangeEuLenW}
                            className='length_input'
                        />
                        <span>x</span>
                        <input 
                            type="text"
                            onChange={onChangeEuLenL}
                            className='length_input'
                        />
                        <span>x</span>
                        <input 
                            type="text"
                            onChange={onChangeEuLenH}
                            className='length_input'
                        />
                    </div>
                    <div className='extra_length'>
                        <span>추가 길이 입력</span>
                        <input 
                            type="text"
                            onChange={onChangeEuExtra}
                            className='extra_input'
                            placeholder=''
                        />
                        <span>cm</span>
                    </div>
                    <span>{eulength_w}x{eulength_l}x{eulength_h}cm</span>
                    <h1>최종 무게 : {eu_result_len_v}kg</h1>
                </div>
                <div className='america_len_vol'>
                    <span>단위 입력</span>
                    <input 
                        type="text"
                        onChange={onChangeUsUnit}
                        className="vol_unit"
                        maxlength='2'
                    />
                    <div>
                        <span className='length_sp'>길이 입력</span>
                        <input 
                            type="text"
                            onChange={onChangeUsLenW}
                            className='length_input'
                        />
                        <span>x</span>
                        <input 
                            type="text"
                            onChange={onChangeUsLenL}
                            className='length_input'
                        />
                        <span>x</span>
                        <input 
                            type="text"
                            onChange={onChangeUsLenH}
                            className='length_input'
                        />
                    </div>
                    <div className='extra_length'>
                        <span>추가 길이 입력</span>
                        <input 
                            type="text"
                            onChange={onChangeUsExtra}
                            className='extra_us_input'
                            placeholder=''
                        />
                        <span>cm</span>
                    </div>
                    <span>{uslength_w}x{uslength_l}x{uslength_h}cm</span>
                    <p>부피 무게 : {us_result_len_v}lb</p>
                    <p>부피 무게(kg) : {us_kg_result_len_v}kg</p>
                    <h1>최종 무게 : {result_v_us}파운드</h1>
                    <div className='deliv_result'>
                        <h4>직구직구 참고표</h4>
                        <div className='deliv_1' id={deliv_num === 1?'us_deliv_result_num':'us_deliv_result_num_display_none'}>
                            <p>9lb &#60;&#61; 부피무게 &#60;&#61; 16lb </p>
                            <p>부피무게(*0.8) : {v_first.toFixed(2)}</p>
                            <p> 실 무게 : {us_weight}파운드</p>
                        </div>
                        <div className='deliv_2'id={deliv_num === 2?'us_deliv_result_num':'us_deliv_result_num_display_none'}>
                            <p>부피무게 &#60;&#61; 9lb </p>
                            <p>부피무게 : {us_result_len_v}</p>
                            <p>실 무게 : {us_weight}파운드</p> 
                            <p>부피 - 질량 : {comp_vw}</p>
                        </div>
                        <div className='deliv_3'id={deliv_num === 3?'us_deliv_result_num':'us_deliv_result_num_display_none'}>
                            <p>부피무게 &#62;&#61; 16lb </p>
                            <p>부피무게 : {us_result_len_v}</p> 
                            <p>실무게 : {us_weight}파운드</p>
                            <p> 부피(50%할인) :{(half_v).toFixed(2)}</p> 
                            <p>실무게(+10):{plus_w.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Length_Volume;