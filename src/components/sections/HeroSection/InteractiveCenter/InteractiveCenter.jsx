import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Box } from '@react-three/drei';
import { motion } from 'framer-motion';
import styles from './InteractiveCenter.module.css';

const CodeBlock = ({ position, rotation, text }) => {
  const meshRef = useRef();
  
  useFrame(({ mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = mouse.y * 0.1;
      meshRef.current.rotation.y = mouse.x * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position} rotation={rotation}>
      <Box args={[2.5, 1.5, 0.1]}>
        <meshStandardMaterial color="#1e293b" />
      </Box>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.2}
        color="#60a5fa"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-medium.woff"
      >
        {text}
      </Text>
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <CodeBlock 
        position={[0, 1, 0]} 
        rotation={[0, 0, 0]} 
        text="public class Developer {}" 
      />
      <CodeBlock 
        position={[-1.5, -0.5, -0.5]} 
        rotation={[0, 0.3, 0]} 
        text="  var skills = new[]" 
      />
      <CodeBlock 
        position={[1.5, -0.5, -0.5]} 
        rotation={[0, -0.3, 0]} 
        text='  { "C#", "WPF" };' 
      />
      <CodeBlock 
        position={[0, -2, -1]} 
        rotation={[0, 0, 0]} 
        text="}" 
      />
    </>
  );
};

const InteractiveCenter = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={styles.container}
      animate={{ 
        scale: isHovered ? 1.05 : 1,
        rotateY: isHovered ? 5 : 0 
      }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        className={styles.canvas}
      >
        <Scene />
      </Canvas>
      
      <div className={styles.glow}></div>
    </motion.div>
  );
};

export default InteractiveCenter;