import React, { useState } from 'react';
import './../css/style.css';

const Length_Volume = ({eugetVolume,usgetVolume}) => {
    
    const [changeEuUnit,setChangeEuUnit] = useState('');
    const [changeUsUnit,setChangeUsUnit] = useState('');

    const [eulength_w,setEuLength_w] = useState(0);
    const [eulength_l,setEuLength_l] = useState(0);
    const [eulength_h,setEuLength_h] = useState(0);

    const [uslength_w,setUsLength_w] = useState(0);
    const [uslength_l,setUsLength_l] = useState(0);
    const [uslength_h,setUsLength_h] = useState(0);

    const [usInlength_w,setInUsLength_w] = useState(0);
    const [usInlength_l,setInUsLength_l] = useState(0);
    const [usInlength_h,setInUsLength_h] = useState(0);

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
        }
        else if(changeEuUnit === 'in'){
            setEuLength_w((len_sample_w * in_cm).toFixed(2));
        }
        else if(changeEuUnit === 'mm'){
            setEuLength_w((len_sample_w * mm_cm).toFixed(2));
        }
        else{
            setEuLength_w(len_sample_w);
        }
    }
    const onChangeEuLenL = (e) =>{
        let len_sample_l = e.target.value;
        if(changeEuUnit === 'ft'){
            setEuLength_l((len_sample_l * ft_cm).toFixed(2));
        }
        else if(changeEuUnit === 'in'){
            setEuLength_l((len_sample_l * in_cm).toFixed(2));
        }
        else if(changeEuUnit === 'mm'){
            setEuLength_l((len_sample_l * mm_cm).toFixed(2));
        }
        else{
            setEuLength_l(len_sample_l);
        }
    }
    const onChangeEuLenH = (e) =>{
        let len_sample_h = e.target.value;
        if(changeEuUnit === 'ft'){
            setEuLength_h((len_sample_h * ft_cm).toFixed(2));
        }
        else if(changeEuUnit === 'in'){
            setEuLength_h((len_sample_h * in_cm).toFixed(2));
        }
        else if(changeEuUnit === 'mm'){
            setEuLength_h((len_sample_h * mm_cm).toFixed(2));
        }
        else{
            setEuLength_h(len_sample_h);
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
            setInUsLength_w((len_sample_w * ft_in).toFixed(2));
        }
        else if(changeUsUnit === 'in'){
            setUsLength_w((len_sample_w * in_cm).toFixed(2));
            setInUsLength_w(len_sample_w);
        }
        else if(changeUsUnit === 'mm'){
            setUsLength_w((len_sample_w * mm_cm).toFixed(2));
            setInUsLength_w((len_sample_w * mm_in).toFixed(2));
        }
        else if(changeUsUnit === 'cm'){
            setUsLength_w(len_sample_w);
            setInUsLength_w((len_sample_w * cm_in).toFixed(2));
        }
        else{
            setUsLength_w(len_sample_w);
        }
    }
    const onChangeUsLenL = (e) =>{
        let len_sample_l = e.target.value;
        if(changeUsUnit === 'ft'){
            setUsLength_l((len_sample_l * ft_cm).toFixed(2));
            setInUsLength_l((len_sample_l * ft_in).toFixed(2));
        }
        else if(changeUsUnit === 'in'){
            setUsLength_l((len_sample_l * in_cm).toFixed(2));
            setInUsLength_l(len_sample_l);
        }
        else if(changeUsUnit === 'mm'){
            setUsLength_l((len_sample_l * mm_cm).toFixed(2));
            setInUsLength_l((len_sample_l * mm_in).toFixed(2));
        }
        else if(changeUsUnit === 'cm'){
            setUsLength_l(len_sample_l);
            setInUsLength_l((len_sample_l * cm_in).toFixed(2));
        }
        else{
            setUsLength_l(len_sample_l);
        }
    }
    const onChangeUsLenH = (e) =>{
        let len_sample_h = e.target.value;
        if(changeUsUnit === 'ft'){
            setUsLength_h((len_sample_h * ft_cm).toFixed(2));
            setInUsLength_h((len_sample_h * ft_in).toFixed(2));
        }
        else if(changeUsUnit === 'in'){
            setUsLength_h((len_sample_h * in_cm).toFixed(2));
            setInUsLength_h(len_sample_h);
        }
        else if(changeUsUnit === 'mm'){
            setUsLength_h((len_sample_h * mm_cm).toFixed(2));
            setInUsLength_h((len_sample_h * mm_in).toFixed(2));
        }
        else if(changeUsUnit === 'cm'){
            setUsLength_h(len_sample_h);
            setInUsLength_h((len_sample_h * cm_in).toFixed(2));
        }
        else{
            setUsLength_h(len_sample_h);
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



   
    eugetVolume(eu_result_len_v);
    usgetVolume(us_result_len_v);
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
                    <span>{eulength_w}x{eulength_l}x{eulength_h}cm</span>
                    <p>부피 무게 : {eu_result_len_v}kg</p>
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
                    <span>{uslength_w}x{uslength_l}x{uslength_h}cm</span>
                    <p>부피 무게 : {us_result_len_v}lb</p>
                    <p>부피 무게(kg) : {us_kg_result_len_v}kg</p>
                </div>
            </div>
        </div>
    );
};

export default Length_Volume;