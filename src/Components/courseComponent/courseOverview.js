import React from "react";
import { Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../../Styles/_courseOverview.css";
export default function Courseoverview(props) {
  return (
    <React.Fragment>
      <Row>
        <div className="header_overview">
          <div className="train_info">
            <div className="image">
              <Image fluid src="/images/trainer.png" />
            </div>
            <div className="trainer_name_dept ml-3 ">
              <h3>Eleanor Grant</h3>
              <h6>Teaches Interior Design</h6>
            </div>
          </div>
          <div className="tutorial_time ml-auto">
            <div className="time_frame">
              <h5>15 video lessons (4h 3m)</h5>
            </div>
          </div>
        </div>
      </Row>
      <Row>
        <div className="overview">
          <h5>About The Course Author</h5>
          <p>
            Go behind the scenes with two-time Oscar-winner Jodie Foster, star
            of Silence of the Lambs and director of Little Man Tate. In her
            first online film class, she’ll teach you how to bring your vision
            to life. Jodie discusses her experience on both sides of the camera
            to guide you through every step of the filmmaking process, from
            storyboarding to casting and camera coverage. Everyone has a story.
            Learn how to tell yours...
          </p>
          <button>
            <svg
              width="81"
              height="13"
              viewBox="0 0 81 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.512 7.28H5.336V10.632H3.936V7.28H0.776V5.984H3.936V2.64H5.336V5.984H8.512V7.28ZM20.6576 2.448C20.599 2.544 20.5376 2.616 20.4736 2.664C20.4096 2.70667 20.3296 2.728 20.2336 2.728C20.1323 2.728 20.0176 2.68533 19.8896 2.6C19.767 2.51467 19.6123 2.42133 19.4256 2.32C19.2443 2.21333 19.0283 2.11733 18.7776 2.032C18.527 1.94133 18.2283 1.896 17.8816 1.896C17.5616 1.896 17.279 1.936 17.0336 2.016C16.7936 2.096 16.591 2.208 16.4256 2.352C16.2603 2.496 16.135 2.66667 16.0496 2.864C15.9696 3.056 15.9296 3.26667 15.9296 3.496C15.9296 3.78933 16.007 4.03467 16.1616 4.232C16.3163 4.424 16.519 4.58933 16.7696 4.728C17.0256 4.86667 17.3163 4.98933 17.6416 5.096C17.967 5.19733 18.2976 5.30667 18.6336 5.424C18.975 5.54133 19.3083 5.67467 19.6336 5.824C19.959 5.97333 20.247 6.16267 20.4976 6.392C20.7536 6.62133 20.959 6.90133 21.1136 7.232C21.2683 7.56267 21.3456 7.96533 21.3456 8.44C21.3456 8.952 21.2576 9.432 21.0816 9.88C20.9056 10.328 20.6496 10.72 20.3136 11.056C19.983 11.3867 19.5723 11.648 19.0816 11.84C18.5963 12.032 18.0416 12.128 17.4176 12.128C17.0496 12.128 16.6896 12.0907 16.3376 12.016C15.991 11.9467 15.6576 11.848 15.3376 11.72C15.023 11.5867 14.727 11.4267 14.4496 11.24C14.1723 11.0533 13.9243 10.8453 13.7056 10.616L14.2496 9.72C14.2976 9.64533 14.359 9.58667 14.4336 9.544C14.5083 9.50133 14.591 9.48 14.6816 9.48C14.8043 9.48 14.9403 9.53867 15.0896 9.656C15.239 9.768 15.4176 9.89333 15.6256 10.032C15.839 10.1653 16.095 10.2907 16.3936 10.408C16.6923 10.52 17.0496 10.576 17.4656 10.576C18.143 10.576 18.6656 10.4107 19.0336 10.08C19.407 9.74933 19.5936 9.29333 19.5936 8.712C19.5936 8.38667 19.5163 8.12267 19.3616 7.92C19.207 7.712 19.0016 7.53867 18.7456 7.4C18.495 7.26133 18.207 7.144 17.8816 7.048C17.5563 6.952 17.2256 6.85067 16.8896 6.744C16.5536 6.632 16.223 6.504 15.8976 6.36C15.5723 6.21067 15.2816 6.01867 15.0256 5.784C14.775 5.544 14.5723 5.25067 14.4176 4.904C14.263 4.552 14.1856 4.11467 14.1856 3.592C14.1856 3.176 14.2656 2.77333 14.4256 2.384C14.591 1.99467 14.8283 1.65067 15.1376 1.352C15.4523 1.048 15.839 0.805333 16.2976 0.624C16.7563 0.442666 17.279 0.351999 17.8656 0.351999C18.527 0.351999 19.1323 0.455999 19.6816 0.664C20.2363 0.872 20.7136 1.168 21.1136 1.552L20.6576 2.448ZM28.3688 7C28.3688 6.712 28.3261 6.44533 28.2408 6.2C28.1608 5.94933 28.0408 5.73333 27.8808 5.552C27.7208 5.36533 27.5208 5.22133 27.2808 5.12C27.0461 5.01333 26.7741 4.96 26.4648 4.96C25.8408 4.96 25.3501 5.13867 24.9928 5.496C24.6354 5.85333 24.4088 6.35467 24.3128 7H28.3688ZM24.2648 8.056C24.2861 8.52 24.3581 8.92267 24.4808 9.264C24.6034 9.6 24.7661 9.88 24.9688 10.104C25.1768 10.328 25.4221 10.496 25.7048 10.608C25.9928 10.7147 26.3128 10.768 26.6648 10.768C27.0008 10.768 27.2914 10.7307 27.5368 10.656C27.7821 10.576 27.9954 10.4907 28.1768 10.4C28.3581 10.304 28.5128 10.2187 28.6408 10.144C28.7688 10.064 28.8861 10.024 28.9928 10.024C29.1314 10.024 29.2381 10.0773 29.3128 10.184L29.8008 10.816C29.5981 11.056 29.3688 11.2587 29.1128 11.424C28.8568 11.5893 28.5848 11.7253 28.2968 11.832C28.0088 11.9333 27.7128 12.0053 27.4088 12.048C27.1048 12.096 26.8088 12.12 26.5208 12.12C25.9554 12.12 25.4301 12.0267 24.9448 11.84C24.4648 11.648 24.0461 11.368 23.6888 11C23.3368 10.632 23.0594 10.176 22.8568 9.632C22.6594 9.088 22.5608 8.46133 22.5608 7.752C22.5608 7.18667 22.6488 6.65867 22.8248 6.168C23.0061 5.67733 23.2621 5.25067 23.5928 4.888C23.9288 4.52533 24.3341 4.24 24.8088 4.032C25.2888 3.81867 25.8301 3.712 26.4328 3.712C26.9341 3.712 27.3981 3.79467 27.8248 3.96C28.2514 4.12 28.6194 4.35733 28.9288 4.672C29.2381 4.98667 29.4781 5.37333 29.6488 5.832C29.8248 6.28533 29.9128 6.80267 29.9128 7.384C29.9128 7.65067 29.8834 7.82933 29.8248 7.92C29.7661 8.01067 29.6594 8.056 29.5048 8.056H24.2648ZM36.8688 7C36.8688 6.712 36.8261 6.44533 36.7408 6.2C36.6608 5.94933 36.5408 5.73333 36.3808 5.552C36.2208 5.36533 36.0208 5.22133 35.7808 5.12C35.5461 5.01333 35.2741 4.96 34.9648 4.96C34.3408 4.96 33.8501 5.13867 33.4928 5.496C33.1354 5.85333 32.9088 6.35467 32.8128 7H36.8688ZM32.7648 8.056C32.7861 8.52 32.8581 8.92267 32.9808 9.264C33.1034 9.6 33.2661 9.88 33.4688 10.104C33.6768 10.328 33.9221 10.496 34.2048 10.608C34.4928 10.7147 34.8128 10.768 35.1648 10.768C35.5008 10.768 35.7914 10.7307 36.0368 10.656C36.2821 10.576 36.4954 10.4907 36.6768 10.4C36.8581 10.304 37.0128 10.2187 37.1408 10.144C37.2688 10.064 37.3861 10.024 37.4928 10.024C37.6314 10.024 37.7381 10.0773 37.8128 10.184L38.3008 10.816C38.0981 11.056 37.8688 11.2587 37.6128 11.424C37.3568 11.5893 37.0848 11.7253 36.7968 11.832C36.5088 11.9333 36.2128 12.0053 35.9088 12.048C35.6048 12.096 35.3088 12.12 35.0208 12.12C34.4554 12.12 33.9301 12.0267 33.4448 11.84C32.9648 11.648 32.5461 11.368 32.1888 11C31.8368 10.632 31.5594 10.176 31.3568 9.632C31.1594 9.088 31.0608 8.46133 31.0608 7.752C31.0608 7.18667 31.1488 6.65867 31.3248 6.168C31.5061 5.67733 31.7621 5.25067 32.0928 4.888C32.4288 4.52533 32.8341 4.24 33.3088 4.032C33.7888 3.81867 34.3301 3.712 34.9328 3.712C35.4341 3.712 35.8981 3.79467 36.3248 3.96C36.7514 4.12 37.1194 4.35733 37.4288 4.672C37.7381 4.98667 37.9781 5.37333 38.1488 5.832C38.3248 6.28533 38.4128 6.80267 38.4128 7.384C38.4128 7.65067 38.3834 7.82933 38.3248 7.92C38.2661 8.01067 38.1594 8.056 38.0048 8.056H32.7648ZM56.5771 0.48V12H54.9291V4.104C54.9291 3.976 54.9318 3.83733 54.9371 3.688C54.9478 3.53333 54.9611 3.37867 54.9771 3.224L51.2731 10.064C51.1291 10.3467 50.9078 10.488 50.6091 10.488H50.3451C50.0411 10.488 49.8198 10.3467 49.6811 10.064L45.9211 3.208C45.9371 3.36267 45.9478 3.51733 45.9531 3.672C45.9638 3.82667 45.9691 3.97067 45.9691 4.104V12H44.3211V0.48H45.7211C45.8865 0.48 46.0145 0.496 46.1051 0.528C46.1958 0.554667 46.2785 0.642666 46.3531 0.792L50.0491 7.488C50.1291 7.64267 50.2038 7.80267 50.2731 7.968C50.3478 8.128 50.4145 8.29333 50.4731 8.464C50.5371 8.29333 50.6038 8.12533 50.6731 7.96C50.7478 7.78933 50.8251 7.62667 50.9051 7.472L54.5451 0.792C54.6198 0.642666 54.7025 0.554667 54.7931 0.528C54.8838 0.496 55.0118 0.48 55.1771 0.48H56.5771ZM62.2635 3.712C62.8662 3.712 63.4102 3.81067 63.8955 4.008C64.3862 4.20533 64.8022 4.48533 65.1435 4.848C65.4902 5.21067 65.7568 5.65067 65.9435 6.168C66.1302 6.68533 66.2235 7.26667 66.2235 7.912C66.2235 8.55733 66.1302 9.13867 65.9435 9.656C65.7568 10.1733 65.4902 10.616 65.1435 10.984C64.8022 11.3467 64.3862 11.6267 63.8955 11.824C63.4102 12.0213 62.8662 12.12 62.2635 12.12C61.6555 12.12 61.1062 12.0213 60.6155 11.824C60.1302 11.6267 59.7142 11.3467 59.3675 10.984C59.0208 10.616 58.7542 10.1733 58.5675 9.656C58.3808 9.13867 58.2875 8.55733 58.2875 7.912C58.2875 7.26667 58.3808 6.68533 58.5675 6.168C58.7542 5.65067 59.0208 5.21067 59.3675 4.848C59.7142 4.48533 60.1302 4.20533 60.6155 4.008C61.1062 3.81067 61.6555 3.712 62.2635 3.712ZM62.2635 10.776C62.9995 10.776 63.5462 10.5307 63.9035 10.04C64.2662 9.544 64.4475 8.83733 64.4475 7.92C64.4475 7.00267 64.2662 6.296 63.9035 5.8C63.5462 5.29867 62.9995 5.048 62.2635 5.048C61.5168 5.048 60.9622 5.29867 60.5995 5.8C60.2368 6.296 60.0555 7.00267 60.0555 7.92C60.0555 8.83733 60.2368 9.544 60.5995 10.04C60.9622 10.5307 61.5168 10.776 62.2635 10.776ZM69.5001 5.352C69.7561 4.83467 70.0655 4.42933 70.4281 4.136C70.7908 3.83733 71.2255 3.688 71.7321 3.688C71.9081 3.688 72.0735 3.70933 72.2281 3.752C72.3828 3.78933 72.5215 3.848 72.6441 3.928L72.5241 5.224C72.5028 5.31467 72.4681 5.37867 72.4201 5.416C72.3775 5.448 72.3188 5.464 72.2441 5.464C72.1641 5.464 72.0495 5.45067 71.9001 5.424C71.7508 5.392 71.5935 5.376 71.4281 5.376C71.1881 5.376 70.9748 5.41067 70.7881 5.48C70.6068 5.54933 70.4415 5.65067 70.2921 5.784C70.1481 5.91733 70.0201 6.08 69.9081 6.272C69.7961 6.464 69.6921 6.68267 69.5961 6.928V12H67.8761V3.84H68.8761C69.0575 3.84 69.1828 3.87467 69.2521 3.944C69.3215 4.008 69.3695 4.12267 69.3961 4.288L69.5001 5.352ZM78.8531 7C78.8531 6.712 78.8105 6.44533 78.7251 6.2C78.6451 5.94933 78.5251 5.73333 78.3651 5.552C78.2051 5.36533 78.0051 5.22133 77.7651 5.12C77.5305 5.01333 77.2585 4.96 76.9491 4.96C76.3251 4.96 75.8345 5.13867 75.4771 5.496C75.1198 5.85333 74.8931 6.35467 74.7971 7H78.8531ZM74.7491 8.056C74.7705 8.52 74.8425 8.92267 74.9651 9.264C75.0878 9.6 75.2505 9.88 75.4531 10.104C75.6611 10.328 75.9065 10.496 76.1891 10.608C76.4771 10.7147 76.7971 10.768 77.1491 10.768C77.4851 10.768 77.7758 10.7307 78.0211 10.656C78.2665 10.576 78.4798 10.4907 78.6611 10.4C78.8425 10.304 78.9971 10.2187 79.1251 10.144C79.2531 10.064 79.3705 10.024 79.4771 10.024C79.6158 10.024 79.7225 10.0773 79.7971 10.184L80.2851 10.816C80.0825 11.056 79.8531 11.2587 79.5971 11.424C79.3411 11.5893 79.0691 11.7253 78.7811 11.832C78.4931 11.9333 78.1971 12.0053 77.8931 12.048C77.5891 12.096 77.2931 12.12 77.0051 12.12C76.4398 12.12 75.9145 12.0267 75.4291 11.84C74.9491 11.648 74.5305 11.368 74.1731 11C73.8211 10.632 73.5438 10.176 73.3411 9.632C73.1438 9.088 73.0451 8.46133 73.0451 7.752C73.0451 7.18667 73.1331 6.65867 73.3091 6.168C73.4905 5.67733 73.7465 5.25067 74.0771 4.888C74.4131 4.52533 74.8185 4.24 75.2931 4.032C75.7731 3.81867 76.3145 3.712 76.9171 3.712C77.4185 3.712 77.8825 3.79467 78.3091 3.96C78.7358 4.12 79.1038 4.35733 79.4131 4.672C79.7225 4.98667 79.9625 5.37333 80.1331 5.832C80.3091 6.28533 80.3971 6.80267 80.3971 7.384C80.3971 7.65067 80.3678 7.82933 80.3091 7.92C80.2505 8.01067 80.1438 8.056 79.9891 8.056H74.7491Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="81"
                  y1="5.99999"
                  x2="3.94155e-07"
                  y2="5.99999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E2B627" />
                  <stop offset="0.520833" stop-color="#DCAD19" />
                  <stop offset="1" stop-color="#E8CA44" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
      </Row>
    </React.Fragment>
  );
}
