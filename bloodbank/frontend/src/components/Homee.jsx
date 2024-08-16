import React from 'react';
import img1 from '../images/image 1.jpg';
import pic from '../images/image 3.jpg';


const Homee = () => {
  return (
    <div><br/>
      <img src={img1} style={{ width: '90%', height: 'auto' }} alt="Blood Donation" />
      <h1 style={{ textAlign: 'center', fontFamily: 'Times New Roman', fontSize: '2.5rem', fontWeight: 'bold',color:'red' }}>
        <strong>WELCOME TO BLOOD BANK</strong>
        <img src={pic} width={40} height={30} alt="Logo" style={{ marginLeft: '10px' }} />
      </h1>

      <div style={{ padding: '20px', border: '2px solid #ddd', borderRadius: '8px', backgroundColor: '#D3D3D3', margin: '20px 0' }}>
        <h2 style={{ textAlign: 'left', color: 'Orchid' }}>&nbsp;Importance of Blood Donation</h2>
        <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
          <li><strong>Saves Lives:</strong> Blood donations save lives by providing essential blood for transfusions to patients undergoing surgery, receiving cancer treatment, or injured in accidents.</li>
          <li><strong>Shortage:</strong> There is a constant shortage of blood; donations help meet the ongoing demand.</li>
          <li><strong>Rare Blood Types:</strong> Donations ensure a supply of rare blood types crucial for patients with specific needs.</li>
          <li><strong>Emergency Preparedness:</strong> A steady supply of donated blood ensures readiness during emergencies and natural disasters.</li>
          <li><strong>Medical Advancements:</strong> Donated blood supports medical research, leading to new treatments and therapies.</li>
          <li><strong>Altruism:</strong> Donating blood is a selfless act that directly benefits others.</li>
          <li><strong>Personal Satisfaction:</strong> Donors experience pride and fulfillment from knowing they’ve contributed to saving lives.</li>
          <li><strong>Community Support:</strong> Blood donations promote a sense of community and social responsibility.</li>
          <li><strong>Medical Treatment:</strong> Donated blood supports various medical treatments, including organ transplants and cancer therapy.</li>
          <li><strong>Gratitude:</strong> Patients and their families are profoundly grateful to blood donors for their generosity.</li>
        </ul>
      </div>
      <div style={{ padding: '20px', border: '2px solid #ddd', borderRadius: '8px', backgroundColor: '#FFA07A', margin: '20px 0' }}>
        <h3 style={{ textAlign: 'left', color: 'maroon' }}>&nbsp;Remedies After Blood Donation</h3>
        <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
          <li>Hydrate: Drink plenty of water (at least 8-10 glasses) to replenish lost fluids.</li>
          <li>Rest: Take it easy for the rest of the day; avoid strenuous activities.</li>
          <li>Snack: Enjoy a healthy snack or meal with a balance of protein, complex carbs, and healthy fats.</li>
          <li>Avoid Alcohol: Steer clear of alcohol for at least 24 hours.</li>
          <li>Pain Relief: If needed, take over-the-counter pain relievers like acetaminophen or ibuprofen.</li>
          <li>Warmth: Apply a warm compress to the donation site to reduce discomfort.</li>
          <li>Elevate: Elevate your donation arm to reduce swelling.</li>
          <li>Iron Supplements: Consider taking iron supplements to replenish lost iron.</li>
          <li>Monitor: Keep an eye on your donation site for any signs of infection.</li>
          <li>Follow-up: Attend any scheduled follow-up appointments with your healthcare provider.</li>
        </ul>
      </div>
      <div style={{ padding: '20px', border: '2px solid #ddd', borderRadius: '8px', backgroundColor: '#20B2AA', margin: '20px 0' }}>
        <h3 style={{ textAlign: 'left', color: 'Chocolate' }}>&nbsp; Blood Donation Details </h3>
        <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
        <li><strong>Eligibility:</strong> Be at least 17 years old, weigh at least 110 pounds, and be in good health</li><br/>
<li><strong>Types of Donations:</strong></li>
    - Whole Blood<br/>
    - Plasma<br/>
    - Platelets<br/>
    - Double Red Cells<br/>
<li><strong>Donation Process:</strong></li>
    1. Registration<br/>
    2. Medical Screening (blood pressure, temperature, hemoglobin)<br/>
    3. Blood Typing<br/>
    4. Donation (8-10 minutes)<br/>
    5. Post-Donation Care (rest, hydration, snack)<br/>
<li><strong>Frequency:</strong></li> 
    - Whole Blood: every 56 days<br/>
    - Plasma: every 28 days<br/>
    - Platelets: every 7 days<br/>
<li><strong>Benefits:</strong></li> 
    - Save up to 3 lives per donation<br/>
    - Free medical screening<br/>
    - Refreshments and snacks<br/>
    - Sense of fulfillment and community service<br/>
<li><strong>Blood Types:</strong></li>


- A (A+, A-)<br/>
- B (B+, B-)<br/>
- AB (AB+, AB-)<br/>
- O (O+, O-)<br/>
- Rare Types (e.g., Rh-null, Bombay blood)<br/>
<li><strong>Blood Component:</strong></li>


- Red Blood Cells (RBCs): carry oxygen<br/>
- Plasma: carries proteins, nutrients, and hormones<br/>
- Platelets: aids blood clotting<br/>
- Cryoprecipitate: used for hemophilia and bleeding disorders<br/>
        </ul>
      </div>
    </div>
  );
};

export default Homee;