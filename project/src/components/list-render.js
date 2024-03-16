import React from 'react'

import './style.css';

function Studentlist() {

    const stu_names=['Ramesh','Kishore','Sabari','Kiran','Mani','Praveen','Kamal','Vimal','Krishna','Vicky']

    const stu_dobs=['10-02-2000','30-02-2001','10-05-2002','04-01-1999','11-02-2002','18-07-2001','11-12-2002','10-11-2000','11-02-2003','14-02-2000']

    const stu_degrees=['B.E','B.Tech','B.E','M.E','B.E','B.E','B.Tech','B.E','B.E','B.E']

    const stu_departments=['ECE','IT','EEE','CSE','MECH','EEE','IT','CSE','ECE','CSE']

    const stu_citys=['Chennai','Madurai','vellore','chittor','sivaganga','karukudi','Thiruvallur','Theni','Tambaram','cuddalore']
    
    const stu_name_list= stu_names.map((Stu_name => <h4>{Stu_name}</h4>))

    const stu_dob_list= stu_dobs.map((Stu_dob => <h4>{Stu_dob}</h4>))

    const stu_degree_list= stu_degrees.map((Stu_degree => <h4>{Stu_degree}</h4>))

    const stu_department_list= stu_departments.map((Stu_department => <h4>{Stu_department}</h4>))

    const stu_city_list= stu_citys.map((Stu_city => <h4>{Stu_city}</h4>))

 return (
    <div>
         <table >
            <tr>
                <th>Student Name</th>
                <th>Student D.O.B</th>
                <th>Student Degree</th>
                <th>Student Department</th>
                <th>Student City</th>
            </tr>
            <tr>
                <td>{stu_name_list[0]}</td>
                <td>{stu_dob_list[0]}</td>
                <td>{stu_degree_list[0]}</td>
                <td>{stu_department_list[0]}</td>
                <td>{stu_city_list[0]}</td>
            </tr>
            <tr>
                <td>{stu_name_list[1]}</td>
                <td>{stu_dob_list[1]}</td>
                <td>{stu_degree_list[1]}</td>
                <td>{stu_department_list[1]}</td>
                <td>{stu_city_list[1]}</td>
            </tr>
            <tr>
                <td>{stu_name_list[2]}</td>
                <td>{stu_dob_list[2]}</td>
                <td>{stu_degree_list[2]}</td>
                <td>{stu_department_list[2]}</td>
                <td>{stu_city_list[2]}</td>
            </tr>
            <tr>
                <td>{stu_name_list[3]}</td>
                <td>{stu_dob_list[3]}</td>
                <td>{stu_degree_list[3]}</td>
                <td>{stu_department_list[3]}</td>
                <td>{stu_city_list[3]}</td>
            </tr>
            <tr>
                <td>{stu_name_list[4]}</td>
                <td>{stu_dob_list[4]}</td>
                <td>{stu_degree_list[4]}</td>
                <td>{stu_department_list[4]}</td>
                <td>{stu_city_list[4]}</td>
            </tr>
            <tr>
                <td>{stu_name_list[5]}</td>
                <td>{stu_dob_list[5]}</td>
                <td>{stu_degree_list[5]}</td>
                <td>{stu_department_list[5]}</td>
                <td>{stu_city_list[5]}</td>
            </tr>
            <tr>
                <td>{stu_name_list[6]}</td>
                <td>{stu_dob_list[6]}</td>
                <td>{stu_degree_list[6]}</td>
                <td>{stu_department_list[6]}</td>
                <td>{stu_city_list[6]}</td>
            </tr>
            <tr>
                <td>{stu_name_list[7]}</td>
                <td>{stu_dob_list[7]}</td>
                <td>{stu_degree_list[7]}</td>
                <td>{stu_department_list[7]}</td>
                <td>{stu_city_list[7]}</td>
            </tr>
            <tr>
                <td>{stu_name_list[8]}</td>
                <td>{stu_dob_list[8]}</td>
                <td>{stu_degree_list[8]}</td>
                <td>{stu_department_list[8]}</td>
                <td>{stu_city_list[8]}</td>
            </tr>
            <tr>
                <td>{stu_name_list[9]}</td>
                <td>{stu_dob_list[9]}</td>
                <td>{stu_degree_list[9]}</td>
                <td>{stu_department_list[9]}</td>
                <td>{stu_city_list[9]}</td>
            </tr>
         </table>

    </div>
  )
    
  
}
export default Studentlist;
