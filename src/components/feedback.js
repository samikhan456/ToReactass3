import React from 'react'

function feedback() {
  return (
    <center>
    <div className="conatiner">
      <form action="#" method="post"> 
        <h2>Quary/Suggestions</h2><table>
          <tbody><tr>
              <td>
                From : 
              </td>
              <td>
                <input type="Email" placeholder="Sender email address" name />
              </td>
            </tr>
            <tr>
              <td>
                Subject : 
              </td>
              <td>
                <input type="text" placeholder="Subject" name />
              </td>
            </tr>
            <tr>
              <td>Phone : </td>
              <td>
                <select>
                  <option>+92</option>
                  <option>+93</option>
                  <option>+974</option>
                  <option>+971</option>
                  <option>+91</option>
                  <option>+977</option>
                  <option>+33</option>
                </select>
              </td>
              <td>
                <input type="Phone" name />
              </td>
            </tr>
            <tr>
              <td>Message : </td>
              <td> <textarea name="Message" id="Message" cols={30} rows={10} defaultValue={""} /></td></tr>
            <tr>
              <td>
                <center><input type="submit" defaultValue="Send" name /></center>
              </td>
            </tr>
          </tbody></table>
      </form>
    </div>
  </center>
  )
}

export default feedback