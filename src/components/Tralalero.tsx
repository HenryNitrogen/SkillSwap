import { HyperText } from "@/components/magicui/hyper-text";
import styles from "./tralalelo.module.css";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
export default function Tralalero() {
    return(
       <main>
            <h1 className={styles.h1}>Discover SkillSwap</h1>
                <div>
                <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <div className={styles.solostudy}>
                                <img src="/guest_icon1.png" alt="SkillSwap" className={styles.icon} />
                                <span>solo study</span>
                            </div>
                            <div>
                                <p className={styles.skibidi}>Own Study Lounge</p>
                                <p className={styles.toilet}>Create your <strong> very own study lounge</strong>with custom backgrounds, personal timers, and goals.</p>
                            </div>
                            <div><button className={styles.tralalelo}>Start Studying - it’s free</button></div>
                            
                        </div>
                        <div className={styles.cardImage}>
                            <img className={styles.tung} src="" alt="comming soon" />
                        </div>

                    </div>
                    


                    <div className={styles.card}>
                    <div className={styles.cardImage}>
                            <img className={styles.tung} src="" alt="comming soon" />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.solostudy}>
                                <img src="/guest_icon1.png" alt="SkillSwap" className={styles.icon} />
                                <span>solo study</span>
                            </div>
                            <div>
                                <p className={styles.skibidi}>Own Study Lounge</p>
                                <p className={styles.toilet}>Create your <strong> very own study lounge</strong>with custom backgrounds, personal timers, and goals.</p>
                            </div>
                            <div><button className={styles.tralalelo}>Start Studying - it’s free</button></div>
                            
                        </div>
                      

                    </div>



                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <div className={styles.solostudy}>
                                <img src="/guest_icon1.png" alt="SkillSwap" className={styles.icon} />
                                <span>solo study</span>
                            </div>
                            <div>
                                <p className={styles.skibidi}>Own Study Lounge</p>
                                <p className={styles.toilet}>Create your <strong> very own study lounge</strong>with custom backgrounds, personal timers, and goals.</p>
                            </div>
                            <div><button className={styles.tralalelo}>Start Studying - it’s free</button></div>
                            
                        </div>
                        <div className={styles.cardImage}>
                            <img className={styles.tung} src="" alt="comming soon" />
                        </div>

                    </div>



                    <div className={styles.card}>
                    <div className={styles.cardImage}>
                            <img className={styles.tung} src="" alt="comming soon" />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.solostudy}>
                                <img src="/guest_icon1.png" alt="SkillSwap" className={styles.icon} />
                                <span>solo study</span>
                            </div>
                            <div>
                                <p className={styles.skibidi}>Own Study Lounge</p>
                                <p className={styles.toilet}>Create your <strong> very own study lounge</strong>with custom backgrounds, personal timers, and goals.</p>
                            </div>
                            <div><button className={styles.tralalelo}>Start Studying - it’s free</button></div>
                            
                        </div>
                       

                    </div>



                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <div className={styles.solostudy}>
                                <img src="/guest_icon1.png" alt="SkillSwap" className={styles.icon} />
                                <span>solo study</span>
                            </div>
                            <div>
                                <p className={styles.skibidi}>Own Study Lounge</p>
                                <p className={styles.toilet}>Create your <strong> very own study lounge</strong>with custom backgrounds, personal timers, and goals.</p>
                            </div>
                            <div><button className={styles.tralalelo}>Start Studying - it’s free</button></div>
                            
                        </div>
                        <div className={styles.cardImage}>
                            <img className={styles.tung} src="" alt="comming soon" />
                        </div>

                    </div>

                    

                </div>
                <div>
                    <VelocityScroll 
                        numRows={1} 
                        defaultVelocity={-2} 
                        style={{ 
                            transform: "rotate(-3deg)", 
                            marginTop: "100px", 
                            color: "white" 
                        }}
                    >
                        <HyperText className={styles.scroll}>Community</HyperText>&emsp;&emsp;&emsp;
                        <HyperText className={styles.scroll}>Together</HyperText>&emsp;&emsp;&emsp;
                        <HyperText className={styles.scroll}>Motivation</HyperText>&emsp;&emsp;&emsp;
                        <HyperText className={styles.scroll}>Tutoring</HyperText>&emsp;&emsp;&emsp;
                        <HyperText className={styles.scroll}>Social events</HyperText>&emsp;&emsp;&emsp;
                        <HyperText className={styles.scroll}>Volunteering</HyperText>&emsp;&emsp;&emsp;
                        <HyperText className={styles.scroll}>Progress</HyperText>&emsp;&emsp;&emsp;
                        <HyperText className={styles.scroll}>Studying</HyperText>&emsp;&emsp;&emsp;
                        <HyperText className={styles.scroll}>Leaderboard</HyperText>&emsp;&emsp;&emsp;
                    </VelocityScroll>
                </div>
                <section className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-20 px-6 text-center">
        {/* 小标题 */}
        <p className="text-gray-400 uppercase tracking-wider text-sm mb-2">
          The Benefits of Joining SkillSwap
        </p>

        {/* 主标题 */}
        <h2 className="text-4xl font-bold mb-12">
          “<span className="text-blue-500">Just</span>” a Study Lounge? Think Again!
        </h2>

        {/* 三张卡片 */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-slate-800 rounded-lg p-8 w-full sm:w-[260px] md:w-[300px] text-left">
            <div className="w-12 h-12 bg-gray-500 rounded mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              The “Good Kind” of peer pressure
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Surround yourself with doers. Our community’s hustle is contagious –  
              in the best way. Studying with others will boost your grades –  
              and that’s scientifically proven.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800 rounded-lg p-8 w-full sm:w-[260px] md:w-[300px] text-left">
            <div className="w-12 h-12 bg-gray-500 rounded mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Get live talks and feedback
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connect with students who breathe passion. Come attend one of our live  
              talks by talented students from top universities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-800 rounded-lg p-8 w-full sm:w-[260px] md:w-[300px] text-left">
            <div className="w-12 h-12 bg-gray-500 rounded mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Share Your Voice through our Community Blog
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Publish articles about your obsessions – from astrophysics to zine-making.  
              Your expertise deserves readers.
            </p>
          </div>
        </div>

        {/* CTA 按钮 */}
        <button className="bg-blue-600 hover:bg-blue-700 transition py-3 px-6 rounded-md text-lg font-medium">
          Convinced Yet? Try for Free now
        </button>

        {/* 好评 & 校徽 */}
        <h3 className="text-2xl font-semibold mt-16 mb-6">
          Loved by 500+ students worldwide
        </h3>
        <div className="w-full h-60 bg-gray-800 rounded-md mb-16"></div>

        <h3 className="text-2xl font-semibold mb-4">
          From these schools
        </h3>
        {/* TODO: 可加学校 Logo 横向滚动栏 */}
      </div>
        
    </section>

    
        </main> 
    )
}
