import React from 'react'
import classes from '../../styles/Details.module.css'
import Stupa1 from '../../assets/stupa_1.jpg'
import Stupa2 from '../../assets/stupas_2.jpg'
import Stupa3 from '../../assets/stupa_3.jpg'
import Stupa5 from '../../assets/stupa_5.jpg'

function Stupas() {
  return (
    <div className={classes.container}>
      <div className={classes.insideContainer}>
        <h1 className={classes.titleText}>About Stupas</h1>
        <div className={classes.imgBigHeroContainer}>
          <img src={Stupa1} width="100%" alt="Stupas in Nepal" />
        </div>
        <p>
          The first stupas appeared in India during pre-Buddhist times and
          originally were monuments on tombs of rulers and other wealthy and
          famous inhabitants of ancient India. Often, such burial mounts were
          created around trees. The Sanskrit word stupa means “hair knot,” “the
          crown of the head,” or “a pile of stones and earth.” The tradition at
          the time was to cremate bodies after death, which meant there were no
          burials in the way we understand them. To memorialize someone, it was
          only necessary to preserve their ashes and unburned remains. These
          remains were placed into stupas. Over time, the tradition gradually
          transformed into utilizing stupas as reliquaries to contain the
          remains of spiritually accomplished individuals.
        </p>
        <p>
          From there, stupas acquired a broader meaning. Today it is impossible
          to strictly categorize stupas into types: they may serve as a
          reliquary, a memorial, or an offering or object of veneration, and at
          the same time as a symbol of Buddhism. Today, stupas house only a few
          pieces of sacred remains; they may contain the clothes of an
          enlightened teacher and other sacred objects or texts. Sometimes
          stupas are built as road signs to protect travelers, and in Tibet and
          Bhutan they are often seen built on high mountain passes. On the
          highest level, a stupa symbolizes the Buddha’s mind, and by making
          offerings to the stupa one accumulates many positive impressions,
          which allows people to gradually discover their own buddha nature and
          come closer to the ultimate happiness, enlightenment.
        </p>
        <p>
          As Buddhism spread, primarily through the trade routes of the Silk
          Road, stupas began to be erected outside of India. Magnificent stupas
          of different shapes were built in Sri Lanka, Nepal, Burma, Cambodia,
          Laos, Vietnam, Indonesia and Thailand. Stupas have also reached as far
          as China, Korea, Japan, Tibet, Mongolia, Buryatia, Tuva and Kalmykia.
          Often, the shapes of the stupas were changed as they acquired
          architectural elements specific to particular regions, or according to
          the form of Buddhism practiced in the region.
        </p>
        <p>
          The Kalachakra style of stupa occupies a special place among other
          stupa designs, as it is dedicated not to a sutra, but to a tantra. A
          Kalachakra stupa was first built by King Ashoka in Amarvati. Vajrayana
          sources say that Buddha gave teachings and initiations into the
          Kalachakra at that place. Because the Kalachakra Tantra became very
          popular in Tibet, several Kalachakra stupas were built there, with
          their shape and proportions strictly following the text. Today, there
          exist about ten such stupas in the world, the most recent addition
          being in the Corinthian highlands of Peloponnesus, Greece, at the
          retreat center Berchen Ling.
        </p>
        <img
          src={Stupa3}
          className={classes.imgFloatLeft}
          width="35%"
          alt="Ole and Hannah Nydal"
        />
        <p>
          In Nepal the ancient Swayambhu Stupa is situated on a hilltop in the
          Kathmandu valley. Legends say that a crystal stupa spontaneously arose
          after Buddha Manjushri cut through the rocks that held the water in a
          lake covering the Kathmandu valley. Later, the large stupa that stands
          there today was built on top of the original self-arisen crystal one.
          Other sources claim that King Ashoka visited this place in the third
          century C.E. and built a temple, while the existing stupa was built at
          the beginning of the fifth century C.E. Since then, it has been one of
          the most revered sites for both Buddhists and Hindus.
        </p>
        <p>
          Traditionally, Buddha’s eyes are drawn on the square part of the
          Nepalese stupas, right under the thirteen rings. The symbolism of the
          stupa is often likened to Buddha’s body in meditation posture: the
          base represents his crossed legs, the hemispherical part his trunk,
          the reliquary his head. The spike on the top points to the ushnisha,
          or the protrusion at the top of his head, while the moon, sun and
          droplet are the triad decorating Buddha’s hair. The all-seeing eyes
          are exactly under the spike with the rings. They look in the four
          directions and symbolize omnipotence, a characteristic of an
          enlightened being.
        </p>
        <p style={{ marginBottom: '30px' }}>
          When Buddhism spread beyond Asia, western Buddhists started building
          stupas in their countries as a means of accumulating merit. Since
          Tibetan Buddhism is the most widespread form of Buddhism in the West,
          the majority of western stupas are built in the traditional Tibetan
          style, but often using modern technologies. When we look at such
          stupas from the ground up, symbolically we see the entire way to
          enlightenment, and each level signifies an important step on the way.
          Buddha, dharma, sangha, enlightened attitude and joy are the basis of
          the first architectural level. Then one accumulates positive
          impressions, like a vase, becoming a proper vessel with sufficient
          abilities of concentration and meditation. The thirteen rings on the
          spire symbolize the final way to enlightenment, by way of ten aspects
          of Buddha’s wisdom and the knowledge of the three times.
        </p>
      </div>
      <div className={classes.insideContainer}>
        <h1 className={classes.titleText}>TYPES OF STUPAS</h1>
        <div className={classes.imgBigHeroContainer}>
          <img src={Stupa5} width="100%" alt="Stupa in Nepal" />
        </div>
        <p>
          There are eight main types of stupas in Tibetan Buddhism which
          directly relate to the four main and four secondary locations where
          Buddha gave teachings. Following, are the eight types of stupas in the
          order in which they relate to the life of Buddha:
        </p>
        <ol>
          <li>
            <strong>Lotus Stupa</strong> was built during Buddha’s lifetime and
            is situated in Lumbini. The main structure is shaped like a lotus
            and symbolizes the birth of the Buddha.{' '}
          </li>
          <li>
            <strong>
              Enlightenment Stupa or Stupa of Overcoming All Obstacles
            </strong>{' '}
            was built in Bodhgaya in honor of Buddha attaining enlightenment. It
            expresses the removal of the last, thin veils of obscuration and
            obstacles.
          </li>
          <li>
            <strong>Stupa of Wisdom or Stupa of Sixteen Gates</strong> was built
            in honor of Buddha’s first teachings in Sarnath/ Varanasi about the
            Four Noble Truths.{' '}
          </li>
          <li>
            <strong>Stupa of Miracles</strong> commemorates Buddha’s display of
            miracles at Shravasti.{' '}
          </li>
          <li>
            <strong>Stupa of Descent</strong> from the Tushita Heaven was built
            in Shankasa symbolising Buddha’s return from a celestial realm where
            he gave teachings to his mother.{' '}
          </li>
          <li>
            <strong>Stupa of Reconciliation</strong> was built in Rajgir to
            represent Buddha’s resolution of a dispute in the Sangha (community
            of practitioners).{' '}
          </li>
          <li>
            <strong>Victory Stupa or Stupa of Complete Victory</strong>{' '}
            signifies an event which occurred in Vaishali shortly before
            Buddha’s death, when he prolonged his life by three months upon the
            request of his students. This symbolizes the victory of Buddha’s
            Teachings over death. It has a cylindrical shape and three steps in
            its central part. This stupa is also known for its healing power.{' '}
          </li>
          <li>
            <strong>Parinirvana Stupa</strong> symbolises the attainment of
            Parinirvana in Kushinagara.{' '}
          </li>
          <br />
          The ninth kind of stupa, <strong>the Kalachakra Stupa</strong>, is not
          related to events in Buddha’s life. It has a general peace-giving
          purpose.{' '}
        </ol>
        <div>
          <img src={Stupa2} width="100%" alt="Stupa in Nepal" />
        </div>
        <p>
          The essence of all the stupas remains the same: to symbolically show
          practitioners the path to liberation and enlightenment, to give them
          an opportunity to make offerings and to help them purify negative
          impressions and increase positive ones, thus accumulating merit and
          wisdom. All this creates the conditions for reaching the state of a
          buddha.{' '}
          <a href="https://buddhism-today.org/buddhist-stupas-history-purpose/">
            More information about the history and purpose of stupas.
          </a>
        </p>
      </div>
    </div>
  )
}

export default Stupas
