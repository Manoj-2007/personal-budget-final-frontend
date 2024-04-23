import React from 'react';
import Menu from './menu';
const HomePage = () => {
  return (
    <>
    <Menu/>
    <div class="site-section">
  <div class="container">
    <div class="row border-responsive">
      <div class="col-lg-6 mb-4 mb-lg-0 border-right">
        <div class="text-center">
        <span class="flaticon-customer-service display-4 d-block mb-3 text-primary"></span>
          <h3 class="text-uppercase h4 mb-3">Master Your Money</h3>
          <p>This web application empowers you to take control of your finances! Built with modern technologies, it offers a user-friendly interface to track your expenses, set budgets, and gain valuable insights into your spending habits.</p>
        </div>
      </div>
      <div class="col-lg-6 mb-4 mb-lg-0 border-right">
        <div class="text-center">
        <span class="flaticon-group display-4 d-block mb-3 text-primary"></span>
          <h3 class="text-uppercase h4 mb-3">Streamlined User Experience</h3>
          <p>Easily create an account, record expenses, set budgets, and visualize spending patterns for financial empowerment.</p>
        </div>
      </div>
      <div class="col-lg-6 mb-4 mb-lg-0 border-right">
        <div class="text-center">
          <span class="flaticon-medal display-4 d-block mb-3 text-primary"></span>
          <h3 class="text-uppercase h4 mb-3">Visualize Your Finances</h3>
          <p>Gather insights through interactive charts representing expenses, enabling informed decision-making for financial stability.</p>
        </div>
      </div>
      <div class="col-lg-6 mb-4 mb-lg-0">
        <div class="text-center">
          <span class="flaticon-agreement display-4 d-block mb-3 text-primary"></span>
          <h3 class="text-uppercase h4 mb-3">Built with Confidence</h3>
          <p>Utilizing a robust MySQL backend and rigorous testing, ensure reliability and security for effective financial management.</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default HomePage;
