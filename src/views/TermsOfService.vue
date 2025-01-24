<script setup lang="ts">
import MisskeyAccountStaff from '@/components/MisskeyAccountStaff.vue';
</script>
<template>
    <div class="title">
        <div class="title-inner">
            <h1>고양이별 이용 약관</h1>
            <div class="content">
                해당 규칙은 2024년 12월 23일부터 효력을 가집니다.<br>
                내부 회의를 통해 일부 내용이 변경될 수 있습니다.
            </div>
            <img class="nekoplanet-logo" src="@/assets/nekoplanet_official.png" />
        </div>
    </div>

    <div class="table-of-contents">
        목차
        <ul id="tos-toc">
            <li>
                <a href="#about-nekoplanet">고양이별의 소개</a>
            </li>
            <li>
                <a href="#nekoplanet-targets">고양이별의 지향</a>
            </li>
            <li>
                <a href="#1-for-local-users">1. 로컬 이용자가 지켜야 할 사항</a>
                <ul>
                    <li>
                        <a href="#writing-notes">글 작성 시 권고사항</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#2-for-both-local-and-remote">2. 로컬/리모트에 모두 적용되는 사항</a>
                <ul>
                    <li>
                        <a href="#banned-behaviors">금지되는 행위</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#other-noticables">기타 알아두면 좋을 사항</a>
            </li>
        </ul>
    </div>

    <div class="tos-content-wrapper">
        <section>
            <h3 id="about-nekoplanet">고양이별의 소개</h3>
            <div class="content">
                <div class="callout"><i>어딘가의 소행성, 2023 QW₈(K23QM2W).</i></div>
                고양이별은 취미 겸 다양한 용도로 구동 중인 조그마한 <b>가입 승인제 미스키 인스턴스</b>입니다.
                특정한 조건을 만족한 유저에게 칭호를 손수 제작하여 붙여드리고 있으며,
                인스턴스의 개발자가 고양이별 전용으로 일부 기능을 개변하는 점 외에는
                <b>연합우주의 다른 미스키들과는 큰 차이점은 없습니다</b>.<br>
                <small>
                    특정한 조건:<br>
                    <b>많은 노트</b>: 100개의 노트를 작성<br>
                    <b>초보자 III</b>: 총 로그인한 날이 15일
                </small>
                <br>
                타 서버와 마찬가지로 고양이별은 미스키 및 마스토돈, 그리고 타 액티비티펍 기반 인스턴스와 기본적인 상호 호환/소통이 가능합니다.
            </div>
        </section>

        <section>
            <h3 id="nekoplanet-targets">고양이별의 지향</h3>
            <div class="content">
                <ol class="list">
                    <li>
                        이용에 있어 피로감이 덜한 SNS 환경을 지향하고 있습니다.
                        타인과의 적절한 거리를 가지고, 남에게 피해를 끼치지 않는 선에서 서로가 마음 편히 이야기를 나눌 수 있는 안락한 공간이 되었으면 좋겠습니다.
                        더불어 기본적으로 신고 외의 사항에는 기본적으로 관리자가 먼저 개입하지 않으려는 스탠스를 취하고 있습니다.
                        <div class="callout">
                            "보고 싶은 컨텐츠를 보고, 보고 싶지 않은 컨텐츠를 피할 수 있으며, 남의 눈치를 보지 않고 취향을 표출할 수 있는 공간이 되기를 바랍니다." ー 버터스콘 규칙
                            발췌
                        </div>
                    </li>
                    <li>
                        관리자의 개입이 없는 만큼, 개인의 각종 뮤트/블락 기능의 적극적인 사용을 권고하고 있습니다.
                        기본 뮤트/블락 기능을 포함해서, 단어를 뮤트하거나 서버 자체를 차단하는 기능도 존재합니다.
                        이를 적절히 사용하여 주세요.
                        개인의 불호는 신고 사유가 아닙니다. 다만, 규칙을 위반한 게시물을 발견했다면 적절히 신고 기능을 이용해 주세요.
                        여러분의 제보가 도움이 될 수 있습니다.
                    </li>
                    <li>
                        타 서버와는 달리 기본적으로 연합 타임라인이 비활성화 되어 있습니다.
                        따라서 본계정도 좋지만, 개인적으로는 부계정 운영에 조금 더 적합한 인스턴스라고 생각합니다.
                        새로운 유저를 발견하고, 친해지는 데에는 여타 인스턴스에 비해서 불리합니다.
                    </li>
                    <li>
                        로컬 이용자에 대한 조치는 관리자가
                        <MisskeyAccountStaff />를 통해서 계정이 약관에서의 어떠한 사항으로, 어떻게 조치되었는지 전달됩니다.
                        이에 대해 불합리하다고 생각한다면 통지를 전달한 계정으로 충분한 자신의 의견을 표명하여 회신하시면 내부에서 충분한 회의를 거친 후 수용/반려 여부를 알려드리겠습니다.
                        리모트 유저에 대한 조치는 기본적으로 적용을 알려주지 않으며, 관련 계정에 이의를 제기하셔도 응답하지 않습니다.
                    </li>
                </ol>
                향후 기타 관리자가 필요한 사항이 있으면 인스턴스 내 관리자로 추정되는 계정이 아닌, 상기한
                <MisskeyAccountStaff />로 연락하여 주시기 바랍니다.<br>
                <b>모든 유저는 가입과 동시에 규칙을 읽고 동의한 것으로 간주합니다.</b>
            </div>
        </section>

        <section>
            <h2 id="1-for-local-users">1. 로컬 이용자가 지켜야 할 사항</h2>
            <div class="content">
                아래의 내용은 글을 쓰는 로컬 이용자에게만 해당하는 내용입니다.<br>
                로컬 이용자는 아래의 가이드라인을 준수하며 글을 작성해야 합니다.<br>
                작성된 글이 가이드라인을 위반하는 경우, <span class="tos-warn">글과 계정이 임의로 조치</span>될 수 있습니다.
                <section>
                    <h3 id="writing-notes">글 작성 시 권고사항</h3>
                    기본적으로 고양이별은 타인이 피로감을 느끼지 않는 선에서는 여러 주제의 발언을 적극 권장하고 있습니다.
                    하지만 다음의 내용들은 타인에게 피로감을 줄 수 있으니 <b>게시글 공개 범위를 홈 이하로 설정하고, 필요에 따라 적절한 설명이 붙여진 CW 기능을 사용하셔야 합니다</b>.
                    <ol>
                        <li>광과민성 발작을 유발할 수 있는 동영상을 게시 (움짤 포함)</li>
                        <li>
                            대체로 민감하거나 분란, 갈등을 조장할 수 있는 글
                            <ol type="a">
                                <li>정치, 종교, 사회 시사 등의 글이 포함됩니다.</li>
                                <li>해당 예시에만 국한되지 않습니다.</li>
                            </ol>
                        </li>
                        <li>
                            공포, 무력감, 분노 등 피로함을 유발할 수 있는 글
                            <ol type="a">
                                <li>피해자, 사상자가 있는 각종 사건사고</li>
                                <li>과격한 의견 표현의 경우도 모두 포함합니다.</li>
                            </ol>
                        </li>
                        <li>외부 커뮤니티의 소위 "불타는" 소재의 글</li>
                        <li>타인을 향한 비방, 조롱 등 존중이 없는 글</li>
                        <li>R18 및 R18-G와 관련된 내용이 담긴 글</li>
                    </ol>
                    특히 고양이별은 상기한 내용보다 R18 및 R18-G의 컨텐츠에 대해 다소 느슨한 스탠스를 취하고 있으므로,
                    타인이 보기에도 대중교통에서 옆자리 사람에게 보여주기 곤란한 수준의 내용을 게시하려고 한다면 적절히 내용물을 가려야 합니다.<br>
                    <span class=tos-warn>해당 내용을 지속적으로 CW없이 공개적으로 작성하여 게시할 경우,
                        작성한 글이 통보 없이 삭제되거나 계정 자체의 공개 범위가 홈 이하로 강제될 수 있습니다.</span>
                </section>
            </div>
        </section>

        <section>
            <h2 id="2-for-both-local-and-remote">2. 로컬/리모트에 모두 적용되는 사항</h2>
            <div class="content">
                아래의 내용은 로컬/리모트를 불문하고 전 유저에게 적용되는 사항입니다.<br>
                대부분의 서버에서 해당 규칙은 통용되고 호환된다고 판단하고 있습니다.<br>
                로컬 이용자와 모더레이터를 보호하기 위함이니, 너른 양해를 부탁드립니다.
                <section>
                    <h3 id="banned-behaviors">금지되는 행위</h3>
                    공개 범위와 CW 유무에 상관 없이, 해당 내용은 모더레이터의 눈에 발견되면 즉시 조치합니다.
                    필요에 따라 운영진 내부 회의를 거친 이후 계정을 조치할 수 있습니다.
                    <ol>
                        <li>
                            타인에게 명백히 상처를 줄 수 있는 행위
                            <ol type="a">
                                <li>조롱 및 비난, 갈등 유발, 사이버불링 등 괴롭힘 전반</li>
                                <li>성별, 성적 지향, 성 정체성을 불문한 헤이트 스피치</li>
                                <li>불특정 다수를 팔로우하거나 반복적으로 메세지를 보내는 행위</li>
                                <li>기타 원치 않는 방법으로 상대를 괴롭히는 행위</li>
                            </ol>
                        </li>
                        <li>가짜 뉴스 및 추후 거짓으로 알려진 정보를 게시하는 행위</li>
                        <li>서버 또는 관리자에게 악의적으로 위해를 가하는 행위</li>
                        <li>
                            자살의 암시 및 자해를 전시하는 행위
                            <ul>
                                <li class="tos-warn">사진, 동영상 뿐만 아니라 글도 전부 해당합니다.</li>
                                <li>자살예방상담상담 109 / 청소년 자살예방상담 1388</li>
                                <li>정신질환에는 적절한 치료를 권합니다. 건강하세요.</li>
                            </ul>
                        </li>
                        <li>현실에서 발생한 성적 미디어의 개시 (소위 3D라고 하는 것)</li>
                        <li>그 외 서버 관리자가 부적절하다고 판단하는 행위</li>
                    </ol>
                    정도에 따라, <b>로컬과 리모트에 관계 없이</b> <span class=tos-warn>유저의 계정을 사일런스와 정지 처리</span>합니다.<br>
                    게시글 범위와 미디어의 공개 범위를 강제로 조절해야 하는 경우 사일런스 처리를 하며,
                    모더레이터를 포함한 로컬 유저의 안전이 걱정되는 경우 계정 정지 처리를 취합니다.<br><br>
                    계정이 정지되면 계정을 사용할 수 없게 되며 <span class=tos-warn>대부분의 경우 무통보로 임의 조치</span>합니다.
                    조치는 이용자 단위로 인스턴스를 불문 동기화 처리합니다.
                    (예시: 리모트 계정이 정지될 시 로컬 계정도 정지 처리. 반대 상황에도 동일 적용.)<br><br>
                    <b>상기 규칙의 일환으로 <span class=tos-warn>고양이별에서 일부 유저와의 소통이 불가능할 수 있습니다.</span></b>
                </section>
            </div>
        </section>
        <section>
            <h2 id="other-noticables">기타 알아두면 좋을 사항</h2>
            <div class="content">
                모든 관리자는 인스턴스 내외로 생기는 문제들에 유연한 자세를 취하고 있고, 상식적으로 일어날 수 있는 대부분의 문제들에 대해서는 너그러이 좋게 해결하려는 경향이 크며 그다지 민감하게
                반응하지 않습니다. 다만 이는 생각할 수 있는 통상적인 사고방식 안에서의 문제들로 이 테두리 밖에서 일어나는 문제들에 대해서는 예외로 특정한 한 사람의 의견이 강하게 반영될 수 있습니다.
                <b>상식적으로 행동하고, 선 넘지 마세요.</b><br>
                <b class=tos-warn>인스턴스 내부의 유저와 모더레이터의 활동은 그 어떠한 경우에도 인스턴스를 대표하지 않습니다.</b>
            </div>
        </section>
    </div>
</template>
<style lang="css" scoped>
div {
    padding-bottom: 18px;
    font-size: 1.1rem;
}

.title {
    padding: 0;
}

.tos-content-wrapper>section {
    padding-top: 20px;
    padding-bottom: 15px;

    & section {
        padding-top: 10px;
        padding-bottom: 8px;
    }
}

.tos-content-wrapper ol,
.tos-content-wrapper ul {
    padding-top: 6px;
    padding-bottom: 4px;
}

.table-of-contents {
    font-size: 1.2rem;

    &>ol,
    &>ul {
        font-size: 1.15rem;

        &>li>ol,
        &>li>ul {
            font-size: 1.12rem;
        }
    }
}

.callout {
    display: block;
    margin: 8px;
    padding: 6px 0px 6px 12px;
    border-left: solid 3px;
    opacity: 0.7;
}

small {
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.9rem;
}

.content>br {
    padding-top: 2.5em;
    padding-bottom: 1.2em;
}

.tos-warn {
    color: var(--neko-mentionme);
}

b {
    text-shadow: 0.1rem 0.1rem 0.4rem;
}
</style>