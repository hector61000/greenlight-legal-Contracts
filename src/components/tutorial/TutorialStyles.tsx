
import React from 'react';

const TutorialStyles = () => {
  return (
    <style>
      {`
        .green-light-color {
          color: #118c4f;
        }
        .green-light-bg {
          background-color: #118c4f;
        }
        .pattern-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23118c4f' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .logo-placeholder {
          width: 150px;
          height: 150px;
          background-color: #118c4f;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          font-weight: 900;
          border: 8px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        .slide-container {
          min-height: 600px;
          position: relative;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .legal-decoration {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 320px;
          height: 320px;
          opacity: 0.1;
          z-index: 0;
        }
        .stat-card {
          background-color: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
          height: 100%;
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .stat-icon {
          position: absolute;
          bottom: -15px;
          right: -15px;
          font-size: 120px;
          opacity: 0.08;
          transform: rotate(-10deg);
        }
        .feature-card {
          background-color: white;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .document-icon {
          position: absolute;
          bottom: -20px;
          left: -20px;
          font-size: 180px;
          opacity: 0.05;
          transform: rotate(-15deg);
          z-index: 0;
        }
        .category-tag {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          margin: 5px;
          background-color: rgba(17, 140, 79, 0.1);
          color: #118c4f;
        }
        .customization-step {
          background-color: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .customization-step:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        .step-number {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #118c4f;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
        }
        .form-field {
          border: 2px dashed rgba(17, 140, 79, 0.3);
          border-radius: 8px;
          padding: 10px 16px;
          font-size: 16px;
          color: #666;
          background-color: rgba(17, 140, 79, 0.03);
          margin-bottom: 10px;
          position: relative;
        }
        .form-field:before {
          content: "حقل إدخال";
          position: absolute;
          top: -10px;
          right: 12px;
          background-color: white;
          padding: 0 6px;
          font-size: 12px;
          color: #118c4f;
        }
        .workflow-arrow {
          position: relative;
          height: 3px;
          background-color: #118c4f;
          margin: 0 15px;
        }
        .workflow-arrow:after {
          content: "";
          position: absolute;
          right: -10px;
          top: -8px;
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 10px solid #118c4f;
        }
        .download-illustration {
          position: absolute;
          bottom: -30px;
          left: -30px;
          font-size: 200px;
          opacity: 0.05;
          transform: rotate(-15deg);
          z-index: 0;
        }
        .benefit-item {
          padding: 15px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        .benefit-item:hover {
          background-color: rgba(17, 140, 79, 0.05);
          transform: translateX(-5px);
        }
        .download-button {
          background-color: #118c4f;
          color: white;
          padding: 14px 30px;
          border-radius: 50px;
          font-weight: bold;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .download-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(17, 140, 79, 0.3);
        }
        .button-icon {
          margin-left: 10px;
          transition: all 0.3s ease;
        }
        .word-icon-badge {
          position: absolute;
          top: -15px;
          right: -15px;
          width: 60px;
          height: 60px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }
        .file-preview {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 20px;
          background-color: white;
          position: relative;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        .file-preview-content {
          height: 200px;
          overflow: hidden;
          position: relative;
        }
        .file-preview-content::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50px;
          background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
        }
        .file-line {
          height: 10px;
          background-color: #e2e8f0;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        .file-line.short {
          width: 70%;
        }
        .file-line.medium {
          width: 85%;
        }
        .file-line.full {
          width: 100%;
        }
        .file-line.word-blue {
          background-color: #2b579a;
          opacity: 0.7;
        }
        @media (max-width: 768px) {
          .slide-container {
            min-height: 500px;
          }
          .logo-placeholder {
            width: 100px;
            height: 100px;
            font-size: 28px;
          }
        }
      `}
    </style>
  );
};

export default TutorialStyles;
