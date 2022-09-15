import React, { useState } from 'react';
import './../css/style.css';

const Length_Volume = ({getVolume}) => {
    
    const [changeEuUnit,setChangeEuUnit] = useState('');
    const [changeUsUnit,setChangeUsUnit] = useState('');

    const [eulength_w,setEuLength_w] = useState(0);
    const [eulength_l,setEuLength_l] = useState(0);
    const [eulength_h,setEuLength_h] = useState(0);

    const in_cm = 2.54;
    const ft_cm = 30.48;
    const mm_cm = 0.1;

    const onChangeEuUnit = (e) =>{
        setChangeEuUnit(e.target.value);
    }
    const onChangeUsUnit = (e) =>{
        setChangeUsUnit(e.target.value);
    }

    const onChangeLenW = (e) =>{
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
    const onChangeLenL = (e) =>{
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
    const onChangeLenH = (e) =>{
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

    let ing_len_v = eulength_w * eulength_l * eulength_h;
    let result_len_v = 0
    if(ing_len_v !==0){
        result_len_v = (ing_len_v / 6000).toFixed(2);
    }

   
    getVolume(result_len_v);
    return (
        <div>
            <p>피트 : ft, 인치 : in, 미리미터 : mm</p>
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
                            onChange={onChangeLenW}
                            className='length_input'
                        />
                        <span>x</span>
                        <input 
                            type="text"
                            onChange={onChangeLenL}
                            className='length_input'
                        />
                        <span>x</span>
                        <input 
                            type="text"
                            onChange={onChangeLenH}
                            className='length_input'
                        />
                    </div>
                    <span>{eulength_w}x{eulength_l}x{eulength_h}cm</span>
                    <p>부피 무게 : {result_len_v}kg</p>
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
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Length_Volume;