/**
 * [자식 컴포넌트] CityItem
 * - 컴포넌트(UI 조각) 역할을 하는 함수이므로 첫 글자를 대문자로 작성합니다. (PascalCase 관례)
 * - 부모로부터 item 데이터를 전달받아(Props) HTML 문자열을 뱉어냅니다.
 */
export default function CityItem(item) {
  return `<li> ${item.name}(${item.score})</li>
     <button class="like-btn" data-name="${item.name}">좋아요!!</button>`;
}
