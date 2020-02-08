<template>
  <div class="timeline">
    <header class="timeline__header">
      <h1>
        thai<b class="timeline__header--fucking">fucking</b>land
      </h1>
    </header>
    <section class="fucking-list">
      <article class="fucking">
        <header class="fucking__header">
          <h3 class="fucking__title">
            นายทหารกราดยิงไม่เลือกหน้า
          </h3>
        </header>
        <time datetime="2020-02-08" class="fucking__occurrence-time">
          8 กุมภาพันธ์ 2020
        </time>
        <p class="fucking__content">
          นายทหารชั้นประทวนยิงผู้บังคับบัญชา แล้วโพสต์สดกราดยิงไม่เลือกหน้า
          เชื่อยังซ่อนอยู่ในห้างเทอร์มินอล 21 โคราช ยอดตาย-เจ็บจำนวนมาก
          <a href="https://www.bbc.com/thai/thailand-51426918">อ่านต่อ</a>
        </p>
      </article>
      <article class="fucking">
        <header class="fucking__header">
          <h3 class="fucking__title">
            โจรปล้นร้านทอง กราดยิงคนดับ 3
          </h3>
        </header>
        <time datetime="2020-01-09" class="fucking__occurrence-time">
          9 มกราคม 2020
        </time>
        <p class="fucking__content">
          โจรบุกเดี่ยวปล้นร้านทองออโรร่า ได้ทองไปยังไม่พอกระหน่ำยิงประชาชนที่มาเดินห้าง
          เสียชีวิต 3 คน หนึ่งในนั้นมีเด็กชายวัย 2 ขวบ พบผู้บาดเจ็บอีก 4 คน
          <a href="https://www.thairath.co.th/news/society/1744060">อ่านต่อ</a>
        </p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.timeline {
  margin: 0 16px 0 60px;
  min-height: 100vh;
  border-left: 2px solid var(--color-accent);
}

.timeline__header {
  font-weight: bold;
  padding: 32px 0 32px 24px;
}

.timeline__header--fucking {
  color: var(--color-accent);
}

.fucking-list {
  padding: 16px 0 16px 24px;
}

.fucking {
  position: relative;
  display: flex;
  padding: 16px 0 32px;
  flex-wrap: wrap;
}

.fucking:before {
  content: '';
  position: absolute;
  top: 20px;
  left: -36px;
  height: 24px;
  width: 24px;
  background: url(../assets/middle-finger.png);
  background-color: var(--color-accent);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  border-radius: 50%;
}

.fucking__header {
  width: 100%;
  height: 1.5rem;
}

.fucking__title {
  font-size: 1.1rem;
  font-weight: bold;
}

.fucking__occurrence-time {
  font-size: .7rem;
  font-weight: normal;
}

.fucking__content {
  width: 100%;
  font-size: 1rem;
}
</style>
