import React, { useState } from 'react';
import './../css/style.css';

const Volume = ({eugetWeight,usgetWeight}) => {
    const [euVolume,setEuVolume] = useState(0);
    const [usVolume,setUsVolume] = useState(0);
    const [usPoundVolume,setUsPoundVolume] = useState(0);
    const [sendUsPoundVolume,setSendUsPoundVolume] = useState(0);
    const [changeEuUnit,setChangeEuUnit] = useState('');
    const [changeUsUnit,setChangeUsUnit] = useState('');

    const g_kg = 0.001;
    const o_kg = 0.0283495;
    const p_kg = 0.453592;

    const onChangeEuUnit = (e) =>{
        setChangeEuUnit(e.target.value)
        onChangeEuVolume(euVolume);
    }
    const onChangeUsUnit = (e) =>{
        setChangeUsUnit(e.target.value)
        onChangeUsVolume(usVolume);
    }

    const onChangeEuVolume = (e) =>{
       
        let volume_sample = e.target.value;
        
        if(changeEuUnit === 'o'){
            setEuVolume((volume_sample * o_kg).toFixed(2)); 
        }
        else if(changeEuUnit ==='p'){
            setEuVolume((volume_sample * p_kg).toFixed(2));
        }
        else if(changeEuUnit ==='g'){
            setEuVolume((volume_sample * g_kg).toFixed(2));
        }
        else{
            setEuVolume(volume_sample);
        }
        
    }
    const o_p = 0.0625;
    const g_p = 0.0022;
    const kg_p = 2.205;

    const onChangeUsVolume = (e) =>{
        let volume_sample = e.target.value;
        
        if(changeUsUnit === 'o'){
            setUsVolume((volume_sample * o_kg).toFixed(2));
            setUsPoundVolume(volume_sample * o_p);
        }
        else if(changeUsUnit ==='p'){
            setUsVolume((volume_sample * p_kg).toFixed(2));
            setUsPoundVolume(volume_sample);
        }
        else if(changeUsUnit ==='g'){
            setUsVolume((volume_sample * g_kg).toFixed(2));
            setUsPoundVolume(volume_sample * g_p);
        }
        else{
            setUsVolume(volume_sample);
            setUsPoundVolume(volume_sample * kg_p);
        }
    }

    eugetWeight(euVolume);
    usgetWeight(usPoundVolume);
    return (
        <div>
            <p>온스 : o, 파운드 : p, 그램 : g</p>
            <div className='vol_indiv'>
            
                <div className='germany_vol'>
                    <span>실 무게 입력 : </span>
                    <input 
                        type="text"
                        onChange={onChangeEuUnit}
                        className="vol_unit"
                        maxlength='1'
                    />
                    <input 
                        type="text"
                        onChange={onChangeEuVolume}
                        className="vol_input"
                    />
                    
                    <p>{euVolume}kg</p>
                </div>
                <div className='america_vol'>
                    <span>실 무게 입력 : </span>
                    <input 
                        type="text"
                        onChange={onChangeUsUnit}
                        className="vol_unit"
                        maxlength='1'
                    />
                    <input 
                        type="text"
                        onChange={onChangeUsVolume}
                        className="vol_input"
                    />
                    
                    <p>{usVolume}kg</p>
                </div>
                
            </div>
        </div>
    );
};

export default Volume;