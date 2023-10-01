import Dropdown from '../components/dropdown';
import DictionaryTable from '../components/table';
 
export default function LoopUpRestaurant() {
  
    return (
      <>
      <div>
        <Dropdown />
      </div>
      <div className="my-16">
        <DictionaryTable />
      </div>
      </>
    );
}

