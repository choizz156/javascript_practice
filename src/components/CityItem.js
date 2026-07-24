/**
 * [자식 컴포넌트] CityItem
 * - 컴포넌트(UI 조각) 역할을 하는 함수이므로 첫 글자를 대문자로 작성합니다. (PascalCase 관례)
 * - 부모로부터 item 데이터를 전달받아(Props) HTML 문자열을 뱉어냅니다.
 */
export default function CityItem(item) {
  // [구조 분해 할당] 객체에서 필요한 속성만 쏙 빼내어 바로 변수처럼 사용합니다.
  const { name, score } = item;

  return `
    <li> 
      ${name}(${score})
      <button class="like-btn" data-name="${name}">좋아요!!</button>
      <!-- 새로 추가된 삭제 버튼 -->
      <button class="del-btn" data-name="${name}">삭제</button>
    </li>
  `;
}
