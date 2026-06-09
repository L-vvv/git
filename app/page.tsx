"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const environmentSlides = [
  {
    image: "/assets/reception.png",
    alt: "宠物洗护店前台接待区",
    label: "Reception",
    title: "明亮前台接待区",
    description: "进店先做基础评估，记录宠物状态、护理需求和注意事项。",
  },
  {
    image: "/assets/wash-area.png",
    alt: "宠物洗护店洗护操作区",
    label: "Grooming",
    title: "独立洗护操作区",
    description: "温控水流、防滑台面和分区工具，减少宠物等待与应激。",
  },
  {
    image: "/assets/grooming-room.png",
    alt: "宠物洗护店美容修剪区",
    label: "Styling",
    title: "美容修剪区",
    description: "专业升降美容台、吹风设备和工具墙，让修剪造型更高效稳定。",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % environmentSlides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <>
      <nav className={styles.nav} aria-label="主导航">
        <a className={styles.brand} href="#">
          <span className={styles.brandMark}>爪</span>
          <span>毛绒绒宠物洗护店</span>
        </a>
        <div className={styles.navLinks}>
          <a href="#services">服务</a>
          <a href="#care">护理标准</a>
          <a href="#environment">店内环境</a>
          <a href="#pricing">套餐</a>
          <a href="#booking">预约</a>
        </div>
        <a className={styles.navCta} href="#booking">
          立即预约
        </a>
      </nav>

      <main>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>温柔洗护 · 精致美容 · 安心托管</span>
            <h1>让每一只毛孩子干净、舒适、闪闪发亮</h1>
            <p>
              独立洗护间、低刺激护理产品、透明服务流程，为猫咪和狗狗提供从基础清洁到造型修剪的一站式体验。
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryBtn} href="#booking">
                预约洗护
              </a>
              <a className={styles.secondaryBtn} href="#pricing">
                查看套餐
              </a>
            </div>
            <div className={styles.heroStats} aria-label="门店数据">
              <div className={styles.stat}>
                <strong>4.9</strong>
                <span>顾客满意评分</span>
              </div>
              <div className={styles.stat}>
                <strong>30min</strong>
                <span>到店快速评估</span>
              </div>
              <div className={styles.stat}>
                <strong>1v1</strong>
                <span>专属护理师服务</span>
              </div>
            </div>
          </div>
        </header>

        <section id="services" className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionTitle}>
              <h2>招牌服务</h2>
              <p>根据宠物体型、毛量、皮肤状态和性格定制流程，减少等待与应激。</p>
            </div>
            <div className={styles.services}>
              <article className={styles.serviceCard}>
                <img
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=85"
                  alt="狗狗洗澡护理"
                />
                <div>
                  <h3>基础香波洗护</h3>
                  <p>清洁、吹干、梳毛、耳道清洁、指甲修剪，适合日常护理。</p>
                </div>
              </article>
              <article className={styles.serviceCard}>
                <img
                  src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=900&q=85"
                  alt="猫咪护理"
                />
                <div>
                  <h3>猫咪低压护理</h3>
                  <p>安静独立空间，按猫咪状态调整节奏，降低陌生环境压力。</p>
                </div>
              </article>
              <article className={styles.serviceCard}>
                <img
                  src="/assets/service-styling.png"
                  alt="宠物美容造型"
                />
                <div>
                  <h3>美容造型修剪</h3>
                  <p>圆脸、泰迪装、贵宾装、清爽短修，保留可爱也方便打理。</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="care" className={styles.section}>
          <div className={`${styles.sectionInner} ${styles.split}`}>
            <div className={styles.splitMedia}>
              <img
                src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=1000&q=85"
                alt="宠物洗护门店环境"
              />
              <div className={styles.badge}>全程可沟通，护理完成后发送照片与护理建议。</div>
            </div>
            <div>
              <span className={styles.eyebrow}>护理标准</span>
              <h2>不只洗干净，更关心它是否放松</h2>
              <p className={styles.careLead}>
                我们会在服务前记录宠物习惯、敏感点和皮肤状况，洗护中使用温控水流与分段吹干，避免过度刺激。
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <strong>分区消毒</strong>
                  <span>工具一宠一消毒，猫犬分时段安排。</span>
                </div>
                <div className={styles.feature}>
                  <strong>护理师记录</strong>
                  <span>沉淀每次毛发、皮肤和情绪反馈。</span>
                </div>
                <div className={styles.feature}>
                  <strong>温和产品</strong>
                  <span>按肤质选择香波，不使用强烈香精。</span>
                </div>
                <div className={styles.feature}>
                  <strong>透明报价</strong>
                  <span>进店先评估，额外服务提前确认。</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.environment}`} id="environment">
          <div className={styles.sectionInner}>
            <div className={`${styles.sectionTitle} ${styles.environmentTitle}`}>
              <h2>店内环境</h2>
              <p>接待、洗护、等候区域相互分隔，保持干净明亮，也让宠物在不同流程里更安心。</p>
            </div>
            <div
              className={styles.carousel}
              aria-label="店内环境轮播"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className={styles.carouselTrack}
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {environmentSlides.map((slide) => (
                  <article className={styles.carouselSlide} key={slide.image}>
                    <img src={slide.image} alt={slide.alt} />
                    <div className={styles.slideCopy}>
                      <span>{slide.label}</span>
                      <h3>{slide.title}</h3>
                      <p>{slide.description}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className={styles.carouselControls} aria-label="切换店内环境图片">
                {environmentSlides.map((slide, index) => (
                  <button
                    className={`${styles.carouselDot} ${index === activeSlide ? styles.isActive : ""}`}
                    type="button"
                    aria-label={`查看${slide.title}`}
                    key={slide.image}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.pricing}`} id="pricing">
          <div className={styles.sectionInner}>
            <div className={styles.sectionTitle}>
              <h2>热门套餐</h2>
              <p>价格会根据体型、毛结程度和实际护理难度微调，到店评估后确认。</p>
            </div>
            <div className={styles.priceGrid}>
              <article className={styles.priceCard}>
                <h3>轻柔洁净</h3>
                <p>适合短毛、小型犬猫日常洗护。</p>
                <div className={styles.price}>
                  ¥88 <small>起</small>
                </div>
                <ul>
                  <li>香波清洁</li>
                  <li>基础吹干梳理</li>
                  <li>耳眼清洁</li>
                </ul>
                <a className={styles.secondaryBtn} href="#booking">
                  选择套餐
                </a>
              </article>
              <article className={`${styles.priceCard} ${styles.highlight}`}>
                <h3>精致全护</h3>
                <p>洗护、修剪和护理建议一次完成。</p>
                <div className={styles.price}>
                  ¥168 <small>起</small>
                </div>
                <ul>
                  <li>全套基础洗护</li>
                  <li>脚底毛与腹底毛修剪</li>
                  <li>护理记录反馈</li>
                </ul>
                <a className={styles.primaryBtn} href="#booking">
                  选择套餐
                </a>
              </article>
              <article className={styles.priceCard}>
                <h3>造型焕新</h3>
                <p>适合需要修型、换季打理的宠物。</p>
                <div className={styles.price}>
                  ¥238 <small>起</small>
                </div>
                <ul>
                  <li>全身造型设计</li>
                  <li>毛结处理</li>
                  <li>精修细节</li>
                </ul>
                <a className={styles.secondaryBtn} href="#booking">
                  选择套餐
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="booking" className={styles.section}>
          <div className={`${styles.sectionInner} ${styles.booking}`}>
            <div className={styles.contactPanel}>
              <h2>预约到店</h2>
              <p>营业时间 9:00-17:00，地址：阳光街 18 号宠物生活馆 1F。电话：400-888-2026。</p>
            </div>
            <form className={styles.form}>
              <div className={styles.formGrid}>
                <label>
                  您的称呼
                  <input type="text" placeholder="例如：李小姐" />
                </label>
                <label>
                  联系电话
                  <input type="tel" placeholder="请输入手机号" />
                </label>
                <label>
                  宠物类型
                  <select defaultValue="狗狗">
                    <option>狗狗</option>
                    <option>猫咪</option>
                    <option>其他小宠</option>
                  </select>
                </label>
                <label>
                  预约服务
                  <select defaultValue="精致全护">
                    <option>精致全护</option>
                    <option>轻柔洁净</option>
                    <option>造型焕新</option>
                    <option>到店咨询</option>
                  </select>
                </label>
                <label>
                  期望日期
                  <input type="date" />
                </label>
                <label>
                  宠物体重
                  <input type="text" placeholder="例如：5kg" />
                </label>
                <label className={styles.full}>
                  特殊说明
                  <textarea placeholder="例如：怕吹风、皮肤敏感、容易紧张等" />
                </label>
              </div>
              <button className={styles.primaryBtn} type="button">
                提交预约信息
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>© 2026 毛绒绒宠物洗护店</span>
          <span>洗护 · 美容 · 护理建议 · 会员寄养</span>
        </div>
      </footer>
    </>
  );
}
