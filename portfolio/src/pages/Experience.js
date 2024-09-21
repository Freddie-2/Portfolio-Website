import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2015 - 2018'
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<SchoolIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>
            Nakuru High School, Nakuru, Kenya
          </h3>
          <p>High School Certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' 
        date='2019'
        iconStyle={{background: '#e9d35b', color: '#fff'}}
        icon={<WorkIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>
            Bank Teller Intern - Equity Bank Limited
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Nairobi, Kenya
          </h4>
          <p>Handled customer transactions in terms of deposits and withdrawals.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2020 - 2024'
        iconStyle={{background: '#3e497a', color: '#fff'}}
        icon={<SchoolIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>
            Ashesi University, Accra, Ghana
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor's Degree
          </h4>
          <p>Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--work' 
        date='2022'
        iconStyle={{background: '#e9d35b', color: '#fff'}}
        icon={<WorkIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>
            Consulting Intern - diiVe Consulting
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Cape Town, South Africa
          </h4>
          <p>Led a team of 7 global consultants in analyzing the South African market to develop a market entry and pricing strategy for a client's new product.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>      
    </div>
  )
}

export default Experience
