import React from 'react'
// import { Link } from 'react-router-dom'
import classes from '../styles/Intro.module.css'
import classesTeachers from '../styles/Teachers.module.css'
import NedoRinpoche from '../assets/NedoRinpoche.jpg'
import Karmapa from '../assets/17Karmapa.jpg'
import LamaOle from '../assets/LamaOle.jpg'

function Teachers() {
  return (
    <div className={classes.container}>
      <p className={classes.titleText}>OUR TEACHERS</p>
      <div style={{ padding: '0 10vmin 5vmin ' }}>
        <div className={classesTeachers.teachersContainer}>
          <div className={classesTeachers.teacherBox}>
            <img src={LamaOle} width="100%" alt="Lama Ole" />
            <p className={classesTeachers.teacherName}>Lama Ole Nydahl</p>
            <p className={classesTeachers.teacherText}>
              <a href="https://lama-ole-nydahl.org">Lama Ole Nydahl</a> and his
              late wife Hannah were the first Western students of H.H. the 16th
              Gyalwa Karmapa Rangjung Rigpe Dorje. For over 40 years, Lama Ole
              Nydahl has taught Diamond Way Buddhism to tens of thousands of
              students and founded over 650 Buddhist centers worldwide. Lama Ole
              Nydahl specializes in the practices of Mahamudra (the “Great
              Seal”) in which a realized teacher can give an experience of the
              limitless nature of mind to the student, and Phowa—a rare,
              centuries-old method of conscious dying. He teaches his students
              to combine lay Buddhist practice with independent thinking and the
              maturity that comes through life experience. He is a recent winner
              (13th of June, 2015) of the UNESCO prize for Dialogue,
              Coexistence, and Peace.
            </p>
          </div>
          <div className={classesTeachers.teacherBox}>
            <img src={NedoRinpoche} width="100%" alt="Nedo Rinpoche" />
            <p className={classesTeachers.teacherName}>Nedo Kuchung Rinpoche</p>
            <p className={classesTeachers.teacherText}>
              Nedo Kuchung Rinpoche was born in 1962 in India, and recognized by
              H.H. the 16th Gyalwa Karmapa as the sixth reincarnation in the
              Nedo Kulha lineage. Until the age of 18, Rinpoche was educated
              under the guidance of H.H. the 16th Gyalwa Karmapa in Rumtek
              monastery. He then studied for three years in Ladakh before
              returning to Rumtek for a three-year retreat, where he practiced
              the tantras of Marpa, the Six Yogas of Naropa, and various
              Mahamudra transmissions. When he was 25, Rinpoche was appointed
              Vajramaster of Rumtek monastery, and he remains today the main
              Vajramaster of H.H. the 17th Karmapa Trinley Thaye Dorje. Nedo
              Rinpoche is currently responsible for Shamar Rinpoche’s monks as
              well as all activities of the Karma Kagyu lineage in Sikkim.
            </p>
          </div>
          <div className={classesTeachers.teacherBox}>
            <img src={Karmapa} width="100%" alt="17th Karmapa" />
            <p className={classesTeachers.teacherName}>
              17th Gyalwa Karmapa Trinley Thaye Dorje
            </p>
            <p className={classesTeachers.teacherText}>
              <a href="https://www.karmapa.org/">
                Thaye Dorje, His Holiness the 17th Gyalwa Karmapa
              </a>{' '}
              is the head of the Karma Kagyu lineage of Tibetan Buddhism. He is
              the spiritual leader of around 900 monasteries, institutions and
              centers in 68 countries around the world. <br />
              Karmapa regularly visits Diamond Way Buddhist centers around the
              world. He has often given teachings and empowerments at the Europe
              Center in Germany, the main international meeting point for
              Diamond Way Buddhists. Lama Ole Nydahl describes Karmapa as being
              the guarantor for the authenticity of our Karma Kagyu lineage.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teachers
