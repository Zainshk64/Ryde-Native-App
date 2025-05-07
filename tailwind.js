// lib/tailwind.js
import { create } from 'twrnc';

const tw = create(); // Optional: pass tailwind.config.js path
tw.setLog(true);     // Logs unknown classes

export default tw;
