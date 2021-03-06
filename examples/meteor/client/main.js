import React from 'react'
import { render } from 'react-dom'

// import lfc from 'lodash-form-collector'
import lfc from './lfc'

import jsonpatch from 'fast-json-patch'

let template = {}

const onSubmit = evt => {
  evt.preventDefault()
  const result = evt.currentTarget.parentNode.lastChild
  console.dir(result)
  const data = lfc(evt.currentTarget)
  console.log('JSON', JSON.stringify(data, null, 4))
  console.log('obj', data)
  result.innerText = JSON.stringify(data, null, 4)
}

const Form = () => <div style={{ display: 'flex', flexFlow: 'column' }}>

  <div style={{ display: 'flex' }}>
    <form style={{ flex: 1 }} onSubmit={onSubmit}>
      <div>
        <label>username</label>
        <input type="text" name="username" defaultValue='crapthings' />
      </div>

      <div>
        <label>password</label>
        <input type="password" name="password" defaultValue='password' />
      </div>

      <div>
        <label>isDisabled</label>
        <input type="checkbox" name="isDisabled" data-type="boolean" />
      </div>

      <div>
        <label htmlFor="">profile.gender</label>
        <label>
          <input type="radio" name="profile.gender" defaultValue='male' defaultChecked /> male
        </label>

        <label>
          <input type="radio" name="profile.gender" defaultValue='female' /> female
        </label>
      </div>

      <div>
        <label>profile.age</label>
        <input type="number" name="profile.age" defaultValue='32' />
      </div>

      <div>
        <label>emails.address</label>
        <input type="email" name="emails.address" defaultValue='crapthings@gmail.com' />
      </div>

      <div>
        <label>emails.address</label>
        <input type="email" name="emails.address" defaultValue='crapthings@163.com' />
      </div>

      <div>
        <label>emails.address</label>
        <input type="email" name="emails.address" defaultValue='crapthings@163.com' />
      </div>

      <div>
        <label>list.string</label>
        <input type="text" name="list.string" defaultValue='a, b, c' data-type='array' />
      </div>

      <div>
        <label>list.number</label>
        <input type="text" name="list.number" defaultValue='1, 2, 3' data-type='[number]' />
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
    <div className='result' style={{ flex: 1, whiteSpace: 'pre' }}></div>
  </div>

  <h3>radio</h3>
  <div style={{ display: 'flex' }}>

    <form style={{ flex: 1 }} onSubmit={onSubmit} >
      <div>
        <label htmlFor="">profile.gender</label>
        <label>
          <input type="radio" name="profile.gender" defaultValue='male' /> male
        </label>

        <label>
          <input type="radio" name="profile.gender" defaultValue='female' /> female
        </label>

        <label>
          <input type="radio" name="profile.gender" defaultValue='not specified' /> not specified
        </label>

        <label>
          <input type="radio" name="profile.gender" data-skip /> by using data-skip, u can unset this field
        </label>
      </div>

      <div>
        <label htmlFor="">profile.color</label>
        <label>
          <input type="radio" name="profile.color" defaultValue='red' defaultChecked /> red
        </label>

        <label>
          <input type="radio" name="profile.color" defaultValue='yellow' /> yellow
        </label>

        <label>
          <input type="radio" name="profile.color" defaultValue='blue' /> blue
        </label>
      </div>

      <div>
        <label htmlFor="">profile.isDisabled</label>
        <label>
          <input type="radio" name="profile.isDisabled" defaultValue='true' data-type="boolean" /> true
        </label>

        <label>
          <input type="radio" name="profile.isDisabled" defaultValue='false' data-type="boolean" defaultChecked /> false
        </label>
      </div>

      <div>
        <label htmlFor="">profile.number</label>
        <label>
          <input type="radio" name="profile.number" value="1" data-type="number" /> 1
        </label>

        <label>
          <input type="radio" name="profile.number" value="2" data-type="number" /> 2
        </label>
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
    <div className='result' style={{ flex: 1, whiteSpace: 'pre' }}></div>
  </div>

   <h3>checkbox</h3>
  <div style={{ display: 'flex' }}>

    <form style={{ flex: 1 }} onSubmit={onSubmit} >
      <div>
        <label htmlFor="">profile.color</label>
        <label>
          <input type="checkbox" name="profile.color" value='red' /> red
        </label>

        <label>
          <input type="checkbox" name="profile.color" value='yellow' /> yellow
        </label>

        <label>
          <input type="checkbox" name="profile.color" value='blue' /> blue
        </label>
      </div>

      <div>
        <label htmlFor="">profile.number</label>
        <label>
          <input type="checkbox" name="profile.number" value="1" data-type="number" /> 1
        </label>

        <label>
          <input type="checkbox" name="profile.number" value="2" data-type="number" /> 2
        </label>
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
    <div className='result' style={{ flex: 1, whiteSpace: 'pre' }}></div>
  </div>

  <div style={{ display: 'flex' }}>
    <form style={{ flex: 1 }} onSubmit={onSubmit} >
      <div>
        <label>text1</label>
        <input type="text" name="text1.a" defaultValue='apple' />
      </div>

      <div>
        <label>text1</label>
        <input type="text" name="text1.a" defaultValue='banana' />
      </div>

      <div>
        <label>text1</label>
        <input type="text" name="text1.a" defaultValue='orange' />
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
    <div className='result' style={{ flex: 1, whiteSpace: 'pre' }}></div>
  </div>

  <div style={{ display: 'flex' }}>
    <form style={{ flex: 1 }} onSubmit={onSubmit} >
      <div>
        <label>test1</label>
        <select name="test1">
          <option value="">select one</option>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
        </select>
      </div>

      <div>
        <label>test2</label>
        <select name="test2" data-type='array'>
          <option value="">select one</option>
          <option value="a, b, c">a, b, c</option>
          <option value="d, e, f">d, e, f</option>
        </select>
      </div>

      <div>
        <label>test3</label>
        <select name="test3" data-type='[number]'>
          <option value="">select one</option>
          <option value="1, 2, 3">1, 2, 3</option>
          <option value="3, 4, 5">3, 4, 5</option>
        </select>
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
    <div className='result' style={{ flex: 1, whiteSpace: 'pre' }}></div>
  </div>

</div>

// const Form = () => <form onSubmit={onSubmit}>
//   <div>
//     <input type="text" name="test array" data-type="array" data-unique />
//     <input type="text" name="test array number" data-type="[number]" />
//     <textarea name="testa" id="" cols="30" rows="10" data-type="array"></textarea>

//     <select name="testselect1">
//       <option value="1, 2, 3, 4" >1, 2, 3, 4</option>
//       <option value="a, b, c, d" >a, b, c, d</option>
//       <option value="3, f, a, aaa" >3, f, a, aaa</option>
//     </select>

//     <select name="testselect" data-type="array">
//       <option value="1, 2, 3, 4" >1, 2, 3, 4</option>
//       <option value="a, b, c, d" >a, b, c, d</option>
//       <option value="3, f, a, aaa" >3, f, a, aaa</option>
//     </select>

//     <select name="testselect22" data-type="[number]">
//       <option value="1, 2, 3, 4" >1, 2, 3, 4</option>
//       <option value="5, 6, 7, 8" >5, 6, 7, 8</option>
//     </select>

//     <select name="testselect33" data-type="array" data-flatten data-unique multiple>
//       <option value="1, 2, 3, 4" >1, 2, 3, 4</option>
//       <option value="a, b, c, d" >a, b, c, d</option>
//       <option value="3, f, a, aaa" >3, f, a, aaa</option>
//     </select>

//   </div>
//   <div>
//     <input type="submit"/>
//   </div>
// </form>

// const Form = () => <form id="form" onSubmit={onSubmit}>
//   <div>
//     <label htmlFor="">
//     <div>selectTestString</div>
//       <select name="selectTestString">
//         <option value=""></option>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//       </select>
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//     <div>selectTestNumber</div>
//       <select name="selectTestNumber" data-type='number'>
//         <option value=""></option>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//       </select>
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//     <div>selectTestNumberM multiple</div>
//       <select name="selectTestNumberM" data-type='number' multiple>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//       </select>
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//     <div>tel</div>
//       <input type="tel" name='tel' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//     <div>datetimeTest1</div>
//       <input type="datetime-local" name='datetimeTest1' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//     <div>monthTest1</div>
//       <input type="month" name='monthTest1' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//     <div>timeTest1</div>
//       <input type="time" name='timeTest1' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//     <div>weekTest1</div>
//       <input type="week" name='weekTest1' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//     <div>dateTest1 date object</div>
//       <input type="date" name='dateTest1' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//     <div>dateTest1 iso string</div>
//       <input type="date" name='dateTest2' data-type='string' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//     <div>rangeTest1</div>
//       <input type="range" name='rangeTest1' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//     <div>scs: String</div>
//       <input type="checkbox" name='scs' value='sc_value' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//     <div>scb: Boolean</div>
//       <input type="checkbox" name='scb' data-type='boolean' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//     <div>text: String</div>
//       <textarea name="text" id="" cols="30" rows="10"></textarea>
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//     <div>testDisabled: String</div>
//     <div>disabled</div>
//       <input type="text" name='testDisabled' defaultValue='disabled field' disabled />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//     <div>name: String</div>
//       <input type="text" name='name' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//       <div>age: Number</div>
//       <input type="number" name='age' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//       <div>price: Float</div>
//       <input type="number" name='price' step='0.01' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//       <div>deep.deep.testNumber: Number</div>
//       <input type="number" name='deep.deep.testNumber' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//       <div>deep.deep.testString: String</div>
//       <input type="text" name='deep.deep.testString' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//       <div>profile.gender: String</div>
//       <input type="text" name='profile.gender' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//       <div>profile.booleanBox: Boolean</div>
//       <input type="checkbox" name='profile.booleanBox' value={'c'} data-type='boolean' />
//     </label>

//     <label htmlFor="">
//       <div>profile.booleanBox: Boolean</div>
//       <input type="checkbox" name='profile.booleanBox' value={'a'} data-type='boolean' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//       <div>profile.stringBox: a</div>
//       <input type="checkbox" name='profile.stringBox' value={'a'} />
//     </label>

//     <label htmlFor="">
//       <div>profile.stringBox: b</div>
//       <input type="checkbox" name='profile.stringBox' value={'b'} />
//     </label>

//     <label htmlFor="">
//       <div>profile.stringBox: c</div>
//       <input type="checkbox" name='profile.stringBox' value={'c'} />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//       <div>profile.stringRadio: a</div>
//       <input type="radio" name='profile.stringRadio' value={'a'} />
//     </label>

//     <label htmlFor="">
//       <div>profile.stringRadio: b</div>
//       <input type="radio" name='profile.stringRadio' value={'b'} />
//     </label>

//     <label htmlFor="">
//       <div>profile.stringRadio: c</div>
//       <input type="radio" name='profile.stringRadio' value={'c'} />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//       <div>secret: hide value</div>
//       <input type="hidden" name='secret' value='hide value' />
//     </label>
//   </div>

//   <div>
//     <label htmlFor="">
//       <div>color: String</div>
//       <input type="color" name='color' />
//     </label>
//   </div>

//   <div>
//     <input type="submit" />
//     <input type="reset" onClick={() => template = {}} />
//   </div>
// </form>

Meteor.startup(function () {
  const App = document.createElement('div')
  render(<div>
    <h1>lodash form collector</h1>
    <a href="https://github.com/crapthings/lodash-form-collector">github</a>
    <span style={{ padding: '0 8px' }}>|</span>
    <a href="https://github.com/crapthings/lodash-form-collector/blob/master/examples/meteor/client/main.js">example src</a>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <Form />
      </div>
    </div>
  </div>, App)
  document.body.appendChild(App)
})
