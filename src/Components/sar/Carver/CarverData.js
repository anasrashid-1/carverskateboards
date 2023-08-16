import React from "react";
import "./CarverData.css";

const data = [
  {
    imageUrl:
      "https://cdn11.bigcommerce.com/s-icfw6t6sn3/stencil/91c54d50-3507-013a-2f0b-6ad5f58f6a49/e/1e6d1790-c81c-013b-f8e2-56f5867ab34b/img/home/carousel/carver.jpg",

    description:
      "Carver has always been about surfing, and of capturing that joyous feeling of flow on a skateboard. The original since 1996, Carver has led the modern surfskate movement forward with its innovative truck systems, like the dual-axis C7 for a smooth and flowing ride, the reverse-kingpin CX for a quick and snappy ride, or the lower, lighter C5 for tricks and parks. And with a variety of surf-inspired shapes and concaves, along with our fast and grippy Roundhouse wheels, Carver delivers speed, power and flow so you can truly ‘Surf your Skate’",
    title: "Carver",
  },
  {
    imageUrl:
      "https://cdn11.bigcommerce.com/s-icfw6t6sn3/stencil/91c54d50-3507-013a-2f0b-6ad5f58f6a49/e/1e6d1790-c81c-013b-f8e2-56f5867ab34b/img/home/carousel/lost.jpg",
    description:
      "Matt ‘Mayhem’ Biolos of ...Lost Surfboards is clearly one of the most cutting edge board designers in surfing today, Mayhem’s brash exploration of progressive surfboard design is the inspiration driving his brand, and his go-for-it style is reflected in the function, bold look and overall vibe of this collection",
    title: "...Lost",
  },
  {
    imageUrl:
      "https://cdn11.bigcommerce.com/s-icfw6t6sn3/stencil/91c54d50-3507-013a-2f0b-6ad5f58f6a49/e/1e6d1790-c81c-013b-f8e2-56f5867ab34b/img/home/carousel/channelislands.jpg",
    description:
      "Arguably one of the most influential surfboard brands in the world, so when they approached us for a collaboration, we were honored. Al Merrick, founder and master board designer, has designed some of the most classic models in surfboard  history.By surfers, for surfers. Channel Islands was created by Al and Terry Merrick in Santa Barbara, and Carver Skateboards was created by Greg Falk and Neil Carver in Venice Beach. Both have been uncompromising and have stayed true to the core. We share a common goal of innovation and development, with hardcore surfing and quality in mind.",
    title: "Channel Islands",
  },
  {
    imageUrl:
      "https://cdn11.bigcommerce.com/s-icfw6t6sn3/stencil/91c54d50-3507-013a-2f0b-6ad5f58f6a49/e/1e6d1790-c81c-013b-f8e2-56f5867ab34b/img/home/carousel/triton.jpg",
    description:
      "Everything about Triton is pure surf, from the classic Thruster and Fish shapes to the full white-dipped decks and deck pad grip. The transparent color overlay graphics feature surfboard glassing techniques adapted to print, and incorporate a sophisticated palette that elevates their elegant simplicity. An affordable entry into surfskate, the Triton series features the precision-pivot Carver CX truck set for a responsive surfskate feel that makes Triton your true connection between land and sea.",
    title: "Triton",
  },
  {
    imageUrl:
      "https://cdn11.bigcommerce.com/s-icfw6t6sn3/stencil/91c54d50-3507-013a-2f0b-6ad5f58f6a49/e/1e6d1790-c81c-013b-f8e2-56f5867ab34b/img/home/carousel/roundhouse.jpg",
    description:
      "The need for grip has never been more important than in surfskate, where you rely on the traction of the wheels to fully lean into carves and cutbacks.Roundhouse Wheels provide extra projection out of your turns so you can complete maneuvers you’d otherwise slide out on. Our key to design is comprehensive, from functional shapes to unsurpassed formulas we make wheels to perform so you can rip.",
    title: "Roundhouse Wheels",
  },
];

// const CarverData = () => {
//   return (
//     <div className="grid-container">
//       <h2>THE ORIGINAL SURFSKATE SINCE 1996</h2>
//     {data.map((item, index) => (
//       <div className="grid-item" key={index}>
//         {index % 2 === 0 ? (
//           <>
//             <div className="image-column">
//               <img src={item.imageUrl} alt={`Image ${index}`} />
//             </div>
//             <div className="description-column">
//               <h2>{item.title}</h2>
//               <p>{item.description}</p>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="description-column">
//             <h2>{item.title}</h2>
//               <p>{item.description}</p>
//             </div>
//             <div className="image-column">
//               <img src={item.imageUrl} alt={`Image ${index}`} />
//             </div>
//           </>
//         )}
//       </div>
//     ))}
//   </div>
// );
// };

// export default CarverData;

// const CarverData = () => {

//   return (
//     <div className="grid-container">
//       <h2>THE ORIGINAL SURFSKATE SINCE 1996</h2>
//       {data.map((item, index) => (
//         <div className="grid-item" key={index}>
//           <div className="image-column">
//             <img src={item.imageUrl} alt={`Image ${index}`} />
//           </div>
//           <div className="description-column">
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CarverData;

// const CarverData = () => {

//   return (
//     <div className="grid-container">
//       <h2>THE ORIGINAL SURFSKATE SINCE 1996</h2>
//       {data.map((item, index) => (
//         <div className="grid-item" key={index}>
//           <div className="image-column">
//             <img src={item.imageUrl} alt={`Image ${index}`} />
//           </div>
//           <div className="description-column">
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CarverData;

// const CarverData = () => {

//   return (
//     <div className="grid-container">
//       <h2>THE ORIGINAL SURFSKATE SINCE 1996</h2>
//       {data.map((item, index) => (
//         <div className="grid-item" key={index}>
//           <div className="image-column">
//             <img src={item.imageUrl} alt={`Image ${index}`} />
//           </div>
//           <div className="description-column">
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CarverData;

// const CarverData = () => {
//   return (
//     <div className="grid-container">
//       <h2>THE ORIGINAL SURFSKATE SINCE 1996</h2>
//       {data.map((item, index) => (
//         <div className={`grid-item ${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
//           <div className="image-column">
//             <img src={item.imageUrl} alt={`Image ${index}`} />
//           </div>
//           <div className="description-column">
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CarverData;

// const CarverData = () => {

//   return (
//     <div className="grid-container">
//       <h2>THE ORIGINAL SURFSKATE SINCE 1996</h2>
//       {data.map((item, index) => (
//         <div className={`grid-item ${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
//           <div className="image-column">
//             <img src={item.imageUrl} alt={`Image ${index}`} />
//           </div>
//           <div className="description-column">
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CarverData;

const CarverData = () => {
  return (
    <div style={ {width : '97%' , margin: 'auto'}}>
      <div className="grid-container">
        <h2  >THE ORIGINAL SURFSKATE SINCE 1996</h2>
        {data.map((item, index) => (
          <div className="grid-item" key={index}>
            <div className="image-column">
              <img src={item.imageUrl} alt={`Image ${index}`} />
            </div>
            <div className="description-column">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarverData;
