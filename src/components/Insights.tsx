import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useTheme } from '../context/ThemeContext';
import { STATS_DATA } from '../constants';
import { motion } from 'framer-motion';

const Insights: React.FC = () => {
  const { theme } = useTheme();
  const textColor = theme === 'day' ? '#1A1A1D' : '#F9F8F6';
  const bgColor = theme === 'day' ? 'bg-white' : 'bg-[#151518]';

  return (
    <section className={`py-20 px-6 ${theme === 'day' ? 'bg-rose-50' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
          >
            <h3 className={`font-serif text-3xl md:text-4xl mb-6 ${theme === 'day' ? 'text-charcoal' : 'text-alabaster'}`}>
              Натовареност & <br /> <span className="text-gold">Свободни часове</span>
            </h3>
            <p className={`font-sans font-light mb-8 ${theme === 'day' ? 'text-gray-600' : 'text-gray-400'}`}>
              Ние ценим вашето време. Графикът ни се запълва бързо, особено в късните часове и през уикенда. 
              Препоръчваме да запазите своя час поне 3-4 дни предварително за ваше спокойствие.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`h-[350px] w-full ${bgColor} p-6 rounded-sm shadow-xl border border-white/5 flex flex-col`}
          >
            <h4 className={`text-sm uppercase tracking-widest mb-6 font-bold ${theme === 'day' ? 'text-gray-400' : 'text-gray-500'}`}>
              Седмична Заетост (%)
            </h4>
            <div className="flex-grow w-full min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={STATS_DATA}>
                  <XAxis 
                    dataKey="name" 
                    stroke={textColor} 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    opacity={0.5}
                    dy={10}
                  />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: theme === 'day' ? '#fff' : '#1A1A1D', border: 'none', borderRadius: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    itemStyle={{ color: '#D4AF37' }}
                    labelStyle={{ color: theme === 'day' ? '#000' : '#fff' }}
                  />
                  <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                    {STATS_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.value > 80 ? '#D4AF37' : (theme === 'day' ? '#E8Cfd1' : '#333')} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Insights;