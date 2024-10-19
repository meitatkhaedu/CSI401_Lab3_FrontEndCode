import "./App.css";
import React from "react";

function App() {
  const [empId, setEmpId] = React.useState(""); // รหัสพนักงาน
  const [empName, setEmpName] = React.useState(""); // ชื่อพนักงาน
  const [empSalary, setEmpSalary] = React.useState(0); // เงินเดือน
  const [empLeave, setEmpLeave] = React.useState(0); // จำนวนวันลา
  const [empLate, setEmpLate] = React.useState(0); // จำนวนวันสาย
  const [empBonus, setEmpBonus] = React.useState(0); // เงินโบนัส
  const [empTotalSalary, setEmpTotalSalary] = React.useState(0); // รายได้ทั้งปี
  const [empTaxRate, setEmpTaxRate] = React.useState(0); // อัตราภาษี
  const [empTax, setEmpTax] = React.useState(0); // ภาษี
  const [empNetIncome, setEmpNetIncome] = React.useState(0); // รายได้สุทธิ
  const [empTotalIncome, setEmpTotalIncome] = React.useState(0); // รายได้ทั้งปี

  const handleEmpChange = (e) => {
    const value = e.target.value;
    setEmpId(value);
  };

  const handleGetEmployee = () => {
    if (empId === "") {
      alert("กรุณากรอกรหัสพนักงาน");
    } else {
      // ดึงข้อมูลพนักงาน
      setEmpName("เมธัส คำจาด");
      setEmpSalary(400000);
      setEmpLeave(5);
      setEmpLate(1);
    }
  };

  const handleCalculateIncome = () => {
    // คำนวณรายได้ต่อปี
    const totalSalary = empSalary * 12;
    const totalLateLeave = empLeave * 5000 + empLate * 2000;
    let totalBonus = 0;
    if (totalLateLeave > 10000) {
      totalBonus = empSalary * 1;
    } else if (totalLateLeave > 5000) {
      totalBonus = empSalary * 1.5;
    } else if (totalLateLeave > 2000) {
      totalBonus = empSalary * 2;
    } else {
      totalBonus = empSalary * 3;
    }
    const totalIncome = totalSalary + totalBonus;
    let taxRate = 0;
    if (totalIncome <= 150000) {
      taxRate = 0;
    } else if (totalIncome <= 300000) {
      taxRate = 5;
    } else if (totalIncome <= 500000) {
      taxRate = 10;
    } else if (totalIncome <= 750000) {
      taxRate = 15;
    } else if (totalIncome <= 1000000) {
      taxRate = 20;
    } else if (totalIncome <= 2000000) {
      taxRate = 25;
    } else {
      taxRate = 30;
    }

    const tax = (totalIncome * taxRate) / 100;
    const netIncome = totalIncome - tax;

    setEmpTotalSalary(totalSalary);
    setEmpBonus(totalBonus);
    setEmpTotalIncome(totalIncome);
    setEmpTaxRate(taxRate);
    setEmpTax(tax);
    setEmpNetIncome(netIncome);
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: 20,
          width: "50%",
          border: "2px solid grey",
          margin: 20,
          gap: 10,
        }}
      >
        <h3 style={{ textAlign: "center" }}>
          <p>การคำนวณรายได้ต่อปีของพนักงาน</p>
        </h3>
        <div>
          <div className="div-detail">
            <label className="label-title">รหัสพนักงาน</label>
            <input type="text" value={empId} onChange={handleEmpChange} />
          </div>
          <div style={{ marginLeft: 300, marginTop: 10, marginBottom: 10 }}>
            <button onClick={handleGetEmployee}>ดึงข้อมูล</button>
          </div>

          {/* แสดงข้อมูลพนักงาน */}

          <div className="div-detail">
            <label className="label-title">ชื่อพนักงาน</label>
            <input type="text" disabled value={empName} />
          </div>
          <div className="div-detail">
            <label className="label-title">อัตราเงินเดือน (บาท)</label>
            <input type="text" disabled value={empSalary} />
          </div>
          <div className="div-detail">
            <label className="label-title">จำนวนวันลารวม (วัน)</label>
            <input type="text" disabled value={empLeave} />
          </div>
          <div className="div-detail">
            <label className="label-title">จำนวนวันสายรวม (วัน)</label>
            <input type="text" disabled value={empLate} />
          </div>
          <div style={{ marginLeft: 270, marginTop: 10, marginBottom: 10 }}>
            <button onClick={handleCalculateIncome}>คำนวณเงินได้</button>
          </div>
        </div>
      </div>

      {/* แสดงรายได้ต่อปี */}
      <div
        style={{
          padding: 20,
          width: "50%",
          border: "2px solid grey",
          margin: 20,
          gap: 10,
        }}
      >
        <h3 style={{ textAlign: "center" }}>
          <p>สรุปข้อมูลเงินได้</p>
        </h3>
        <div>
          <div className="div-detail">
            <label className="label-title">เงินเดือนต่อปี (บาท)</label>
            <input type="text" disabled value={empTotalSalary} />
          </div>
          <div className="div-detail">
            <label className="label-title">เงินพิเศษ / โบนัส</label>
            <input type="text" disabled value={empBonus} />
          </div>
          <div className="div-detail">
            <label className="label-title">เงินได้ทั้งปี (บาท)</label>
            <input type="text" disabled value={empTotalIncome} />
          </div>
          <div className="div-detail">
            <label className="label-title">อัตราภาษีเงินได้ (%)</label>
            <input type="text" disabled value={empTaxRate} />
          </div>
          <div className="div-detail">
            <label className="label-title">จำนวนภาษีเงินได้ (บาท)</label>
            <input type="text" disabled value={empTax} />
          </div>
          <div className="div-detail">
            <label className="label-title">เงินได้ต่อปีสุทธิ (บาท)</label>
            <input type="text" disabled value={empNetIncome} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
