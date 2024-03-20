import axios from 'axios';

// API 호출을 담당하는 함수
const fetchData = async (url) => {
  try {
    const response = await axios.get(url, { headers: { 'x-nxopen-api-key': process.env.NEXT_API_NEXON } });
    return response.data;
  } catch (error) {
    console.error("API 요청 중 에러가 발생했습니다: ", error);
    throw error;
  }
};

export default async (req, res) => {
  const { name } = req.query;

  try {
    // ocid
    const ocidData = await fetchData(`https://open.api.nexon.com/heroes/v1/id?character_name=${name}`);
    const ocid = ocidData.ocid;

    // 각 API 호출을 병렬로 수행
    const [basic, title, titleEquipment, itemEquipment, stat, guild] = await Promise.all([
      fetchData(`https://open.api.nexon.com/heroes/v1/character/basic?ocid=${ocid}`), // 기본 정보
      fetchData(`https://open.api.nexon.com/heroes/v1/character/title?ocid=${ocid}`), // 타이틀/문양
      fetchData(`https://open.api.nexon.com/heroes/v1/character/title-equipment?ocid=${ocid}`), // 장착 타이틀/문양
      fetchData(`https://open.api.nexon.com/heroes/v1/character/item-equipment?ocid=${ocid}`), // 장착 아이템
      fetchData(`https://open.api.nexon.com/heroes/v1/character/stat?ocid=${ocid}`), // 능력치
      fetchData(`https://open.api.nexon.com/heroes/v1/character/guild?ocid=${ocid}`), // 가입/신청한 길드
    ]);

    res.status(200).json({ basic, title, titleEquipment, itemEquipment, stat, guild });
  } catch (error) {
    res.status(500).json({ error: '서버에서 데이터를 불러오는 데 실패했습니다.' });
  }
};