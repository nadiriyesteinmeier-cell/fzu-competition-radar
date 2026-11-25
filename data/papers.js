window.PAPER_DATA_UPDATED_AT = "2026-11-25";
window.PAPER_ITEMS = [
  {
    "id": "2611.33158",
    "title": "OmniAct: One Policy, One Million Embodiments",
    "authors": [
      "Xiang Fan",
      "Yuheng Wang",
      "Jiayuan Yan",
      "Bohan Fang",
      "Wisdom Oluchi Ikezogwo",
      "Ainaz Eftekhar",
      "Max Argus",
      "Jason Ren",
      "Jiafei Duan",
      "Ranjay Krishna"
    ],
    "abstract": "A single policy that controls diverse robots must not only transfer task knowledge across embodiments, but also adapt its behavior to each robot's capabilities. Existing approaches facilitate transfer through shared action representations, but these representations do not necessarily capture how differences in robot morphology should shape manipulation strategies. We introduce OmniAct, a cross-embodiment manipulation policy that conditions directly on each robot's kinematics in a specific scene to produce embodiment-specific behavior. This kinematic graph represents the robot's joint positions, motion axes, and connectivity to its visual observation, allowing the policy to account for how its embodiment related to objects and surfaces in the scene. A flow-matching policy predicts relative joint motions for each node, enabling control across robots with different degrees of freedom and kinematic configurations. To learn how physical structure shapes behavior at scale, we procedurally design and filter one million physically feasible robot embodiments; next, we develop algorithms to generate robot trajectories in simulation for all embodiments; finally, we train across diverse simulated manipulation tasks. On 2,000 embodiment-scene-held-out evaluation episodes, OmniAct achieves 63.0% success, compared to 17.8% for pi 0.5 and 57.9% for the strongest baseline; on the task families GPT-6 Astra was evaluated on, it achieves 64.7% against GPT-6 Astra's 41.1%. On a previously unseen real-world robot, it achieves nearly twice the success rate of the next best method, MolmoAct2. Beyond task success, we observe that OmniAct learns distinct manipulation strategies that exploit the capabilities and accommodate the limitations of different morphologies. Project: https://omniact.github.io/",
    "published": "2026-11-24T18:59:58Z",
    "updated": "2026-11-24T18:59:58Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.33158"
  },
  {
    "id": "2611.33157",
    "title": "PointX: Multi-View Consistent Intrinsics by Querying Surface Points",
    "authors": [
      "Miguel Farinha",
      "Sam Sartor",
      "Iliyan Georgiev",
      "Giuseppe Vecchio",
      "Ronald Clark",
      "Michael Fischer"
    ],
    "abstract": "The appearance of a scene is determined by the albedo, roughness, metallicity and normal of every point on its surface, and by the light that reaches it, its irradiance. Recovering these intrinsics from images is ambiguous, and methods that predict them per pixel give the same surface point a different decomposition in every view. We introduce PointX, a simple feed-forward model that predicts intrinsics per 3D surface point instead. A multi-view transformer encodes a set of unposed images, and for any queried surface point, PointX pools the point's tokens across the views in which it appears and decodes the point's intrinsics once. Each point of a 3D reconstruction of the scene, such as a point cloud or a mesh, thus receives a single prediction, which is exactly consistent across views by construction and enables view-consistent relighting and editing. The same model also predicts per-view maps, from one image or many, by querying the point seen at every pixel. These maps agree across views up to the precision of the estimated geometry and correspondences. PointX is significantly more consistent than existing methods, while remaining competitive in accuracy from a single image and improving as views are added. Project page: https://pointx-paper.github.io/",
    "published": "2026-11-24T18:59:42Z",
    "updated": "2026-11-24T18:59:42Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.33157"
  },
  {
    "id": "2611.33153",
    "title": "DiaCap: Jointly Learning Who Speaks When for Audiovisual Dialogue Captioning",
    "authors": [
      "Binfei Ji",
      "Zhiwen Cao",
      "Anqi Yang",
      "Prem Seetharaman",
      "Shuo Yang",
      "Ratheesh Kalarot",
      "Yingyan Celine Lin",
      "Mingze Xu"
    ],
    "abstract": "We present DiaCap, an audiovisual LLM for comprehensive dialogue captioning, which produces the transcript, timestamps, and a visual description of the speaker for every utterance in a video. Considering that utterance timing and audiovisual diarization are tightly coupled, DiaCap unifies the tasks in a single model, trained in two complementary stages. First, we train DiaCap on 225K curated clips, using synthetic captions that densely label every utterance in detail. Second, we further refine the model via reinforcement learning on 2.9K human-corrected clips, using fine-grained feedback that directly evaluates utterance timing, speaker grouping, and speaker binding. On DiaDemBench, which we extend with utterance-level timestamps and subtitle redaction, both DiaCap with off-the-shelf transcripts and its end-to-end variant DiaCap-E2E achieve strong results. Specifically, DiaCap performs on par with Gemini 4 Argon in audiovisual diarization while clearly outperforming it in timestamp accuracy (76.59 vs. 42.76 TIME). It also maintains strong diarization on multilingual and minute-long videos, and transfers to audiovisual question answering.",
    "published": "2026-11-24T18:59:08Z",
    "updated": "2026-11-24T18:59:08Z",
    "categories": [
      "cs.CV",
      "cs.CL",
      "cs.MM",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2611.33153"
  },
  {
    "id": "2611.33151",
    "title": "BioLoom: Scaling Biomedical Vision-Language Models by Learning from the Structure of Scientific Articles",
    "authors": [
      "Yuwei Yang",
      "Xiaoxiao Sun",
      "Alejandro Lozano",
      "Yuan-Sen Ting",
      "Yuhui Yuan",
      "Liang Zheng",
      "Serena Yeung-Levy"
    ],
    "abstract": "The development of biomedical vision-language models (VLMs) with contrastive image-text pretraining has been driven by scaling to increasingly large and diverse image-text datasets. Beyond scaling, further progress can come from learning richer representations from existing data. We hypothesize that the structure of scientific literature itself provides an additional source of supervision: figures, panels, captions, and accompanying article text encode rich relationships across modalities. Yet, treating these as independent image-text pairs overlooks their relationships. To address this limitation, we incorporate these structural relationships into contrastive image-text supervision. We preserve exact image-text matches while introducing weaker positive supervision for related pairs, such as a panel and the caption of a sibling panel. We upweight cross-article negatives of the same content type to encourage finer discrimination. We also enrich panel descriptions using visual content, original figure captions, and mentioning paragraphs. Pairing panels with these descriptions and whole figures with their original captions yields Loom52M, a dataset of 52.4 million image-text pairs spanning scientific charts and biomedical images. Using Loom52M, BioLoom (DFN-2B) achieves 56.82% domain-balanced mean accuracy across 67 zero-shot classification tasks from 43 datasets in 10 domains, compared with 48.77% for MedPMC-CLIP. On BioLoomBench with concise captions and BioMedFlickr, it achieves bidirectional mean Recall@1 of 63.20% and 10.59%, versus 46.37% and 7.55% for the respective strongest evaluated baselines, BiomedCLIP and MedPMC-CLIP. Code, datasets, benchmarks, and models are available at https://bioloom-clip.github.io/.",
    "published": "2026-11-24T18:59:04Z",
    "updated": "2026-11-24T18:59:04Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.33151"
  },
  {
    "id": "2611.33147",
    "title": "One Take, Many Cameras: Audio-Grounded Shot Synthesis for Dialogue Re-Cinematography",
    "authors": [
      "Anthony Chen",
      "Naomi Ken Korem",
      "Matan Ben-Yosef",
      "Tavi Halperin",
      "Urska Jelercic",
      "Ofir Bibi",
      "Daniel Cohen-Or",
      "Or Patashnik",
      "Maneesh Agrawala"
    ],
    "abstract": "Creating a dialogue scene typically requires cutting between multiple views (e.g., close-ups, medium shots, and over-the-shoulder shots) of the actors. Yet capturing such coverage is costly and in many settings unavailable. We study dialogue re-cinematography: synthesizing additional shots from a single wide-angle dialogue video. Existing video generators can synthesize new shots, but rely on visual cues alone, so when the source video barely shows the lips, the generated lip motion fails to match the speech. Our key observation is that the speech audio is view-invariant: it constrains lip motion in any target view. Building on this insight, we adapt a pretrained audio-visual diffusion model to generate the new shot from a target frame that specifies the view, a source video that contains the performance, and the speech audio that drives lip motion. In multi-person scenes, however, pretrained audio-visual models drive every visible face with the same speech, causing speech leakage, where silent listeners mouth the speaker's words. We therefore introduce speaker-aware audio gating, a training-free module that lets the audio drive only the faces that speak in the target shot. On a cinematic paired-view benchmark spanning diverse viewpoints and framings, our method lowers perceptual error by 59%, landmark error by 56%, and speech leakage by 97% relative to the strongest baseline, Wan 3.0. Our method also remains robust on in-the-wild scenes, highlighting its potential for film post-production.",
    "published": "2026-11-24T18:58:32Z",
    "updated": "2026-11-24T18:58:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.33147"
  },
  {
    "id": "2611.33145",
    "title": "Lost on Campus: Evaluating Embodied Spatial Reasoning of Vision-Language Models in the Wild",
    "authors": [
      "Zehan Zheng",
      "Yanyuan Chen",
      "Deming Li",
      "Yutao Tang",
      "Jianwen Xie",
      "Alan Yuille",
      "Jieneng Chen",
      "Cheng Peng"
    ],
    "abstract": "Embodied Spatial Reasoning (ESR) is central to deploying Vision-Language Models (VLMs) in real-world embodied tasks, yet remains inadequately evaluated. Existing benchmarks primarily assess spatial reasoning in static images or synthetic indoor environments, where semantic shortcuts often suffice, making it difficult to faithfully evaluate spatial reasoning capabilities in the wild. In light of this, we present Lost on Campus, a benchmark for evaluating ESR in large-scale real-world outdoor 3D environments reconstructed by 3D Gaussian Splatting. Our benchmark introduces a unified reasoning-action evaluation framework that seamlessly integrates diagnostic QA for isolated reasoning with closed-loop interactive navigation for active reasoning under multimodal instructions. To enable fine-grained diagnosis, we evaluate six capability aspects of ESR: action grounding, spatial foresight, metric awareness, goal-directed planning, ego-allocentric localization, and spatio-temporal consistency. Extensive experiments reveal that: (i) Compared to indoor settings, real-world outdoor environments impose substantially higher demands on spatial reasoning, where existing models exhibit poor performance; (ii) VLMs still struggle with fine-grained visual alignment, with failures in spatial foresight and ego-allocentric localization emerging as primary bottlenecks; (iii) Improving multimodal interaction capabilities and long-term spatial reasoning is crucial for advancing embodied intelligence. These findings highlight that faithful evaluation of ESR demands benchmarks tightly coupling perception, reasoning and action within realistic and continuous environments.",
    "published": "2026-11-24T18:57:48Z",
    "updated": "2026-11-24T18:57:48Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.33145"
  },
  {
    "id": "2611.33143",
    "title": "ROAM-Bench: Evaluating Embodied Active Spatial Intelligence through Evidence Verification",
    "authors": [
      "Xingjian Ran",
      "Xiaoye Mo",
      "Sihao Liu",
      "Li Luo",
      "Taiqiang Wu",
      "Ji Zhao",
      "Wenqi Shao",
      "Hongyang Li",
      "Jiaqi Wang",
      "Bo Dai"
    ],
    "abstract": "Embodied spatial intelligence requires agents to gather information through exploration and interaction, then use it to reason and act. Existing benchmarks insufficiently distinguish correct outcomes from completion of these task requirements. We introduce ROAM-Bench to evaluate these abilities under robot motion and collision constraints. Independent checks use simulation state and episode records to assess outcomes and task requirements, with stronger checks of geometry, coverage, or placement. It comprises 250 manually validated tasks across 11 types in five groups and 27 indoor environments, covering object and room search, counting, geometric judgments, direction reasoning, and relocation. Human evaluators achieve 84% strict task success on 100 sampled tasks, with every correct outcome satisfying the required checks. Across seven frontier vision-language models, we identify two complementary failure modes: correct outcomes with unmet task requirements, and incorrect outcomes despite passing stronger checks. Oracle-input diagnostics show that more complete target observations and calibrated feedback improve final spatial judgments.",
    "published": "2026-11-24T18:56:22Z",
    "updated": "2026-11-24T18:56:22Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.33143"
  },
  {
    "id": "2611.33141",
    "title": "iWAM: Efficient Action Prediction from World Models without Explicit Future Prediction",
    "authors": [
      "Vansh Kapoor",
      "Max Sobol Mark",
      "Sreyas Venkataraman",
      "Max Simchowitz",
      "Aviral Kumar"
    ],
    "abstract": "World-action models (WAMs) build policies on pretrained video-generation models, on the premise that predicting how a scene evolves helps determine how to act. However, generating future scenes is expensive for real-time control. This motivates efficient proxies for future imagination, but how to train such proxies without sacrificing action-prediction quality remains unclear. An effective proxy need not generate a high-resolution frame; it only needs to provide enough information to distinguish between possible futures. This leads to the design principle behind iWAM: rather than denoising an entire future frame, can we condition the action policy on intermediate features from a single video-model evaluation? We show that the answer is yes. Exploiting the reversible dynamics of flow-matching models, we invert each training future into the corresponding latent noise vector. However, a single velocity evaluation at this latent does not necessarily yield informative features for action prediction. We therefore learn a bidirectional flow map that amortizes future-generation computation, enabling a single model evaluation to provide effective conditioning features. At inference, we sample a latent noise vector from the prior and condition the policy using just one video-backbone forward pass. Across simulated benchmarks and real robots, iWAM recovers the generalization benefits of WAMs while substantially reducing its inference cost.",
    "published": "2026-11-24T18:56:04Z",
    "updated": "2026-11-24T18:56:04Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.33141"
  },
  {
    "id": "2611.33137",
    "title": "Physicl Scenes: An Artist-created 3D Dataset for Learning Perception and Action",
    "authors": [
      "Yueh-Cheng Liu",
      "Snehal Jauhri",
      "Matthias Nießner",
      "Angela Dai"
    ],
    "abstract": "We present Physicl Scenes, a high-quality artist-created and curated dataset of 6,499 3D scenes spanning household rooms, public interiors, and outdoor spaces. The dataset combines detailed geometry, physically based materials, and carefully composed environments with object- and part-level semantic annotations, providing rich, joint supervision for visual and embodied learning. We demonstrate its value as training data across inverse rendering, 3D reconstruction, scene understanding, and mobile manipulation. Across these tasks, training state-of-the-art methods with our scenes improves performance over alternative synthetic datasets. In addition, we introduce a mobile manipulation benchmark, evaluating vision-language-action models performing physical pick and place in diverse 3D scenes with realistic layouts, and using our part annotations to also score where each object is grasped. Our dataset will be released publicly to facilitate research in visual and embodied AI.",
    "published": "2026-11-24T18:55:07Z",
    "updated": "2026-11-24T18:55:07Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.33137"
  },
  {
    "id": "2611.33135",
    "title": "BriConstrain: Geometrically Constrained Decoding for Autoregressive Brick Assembly Generation",
    "authors": [
      "Nadav Magar",
      "Amir Hertz",
      "Ariel Shamir",
      "Or Patashnik"
    ],
    "abstract": "Language models can generate LEGO$^\\circledR$ assemblies from text, but their builds often contain parts that collide or attach to nothing. The usual approach of rejecting and resampling invalid placements discards decoded tokens without guaranteeing a valid build. We present BriConstrain, a constrained decoding method that restricts a pretrained language model's next-token probabilities before sampling, steering it towards valid placements. Because the validity of a brick placement depends on the non-predetermined build state, it cannot be compiled into a fixed grammar and must be checked dynamically. However, checking the validity of a brick before sampling is challenging as the space of valid placements is combinatorially large and cannot be enumerated exhaustively. Our key idea is to narrow the search space by constraining how parts attach rather than which parts attach to each other. Concretely, given the model's predictions of the currently placed part, and the previously placed parent it wants to connect to, we constrain the model's choice of how they attach. This allows us to span the space of part attachments, using a precomputed geometric oracle, and to effectively filter out colliding options. With valid attachment candidates in hand, we bias the model's next-token distribution towards the remaining valid candidates. We evaluate our method on two LEGO$^\\circledR$ formats and models: BrickNet, which annotates connectivity explicitly, and our proposed Implicit Connectivity LDraw Format (ICLF), which uses numeric values for placements and leaves connectivity implicit. Our method raises collision-free builds from 31% to 91% on BrickNet and from 15% to 65% on ICLF, and outperforms rejection sampling on both formats at about 60% of its decoding cost.",
    "published": "2026-11-24T18:54:38Z",
    "updated": "2026-11-24T18:54:38Z",
    "categories": [
      "cs.CV",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.33135"
  },
  {
    "id": "2611.33119",
    "title": "MetaFORGE: A Meta-Learning Framework for Harness Optimization in Automated Code Generation for Parallel Computing",
    "authors": [
      "Scott Piersall",
      "Yang Gao",
      "Shenyang Liu",
      "Liqiang Wang"
    ],
    "abstract": "Large language models (LLMs) can generate parallel programs, but their correctness and performance depend strongly on the instructions that guide generation. We present \\textsc{MetaFORGE}, an execution-grounded meta-learning framework that iteratively optimizes persistent natural-language skill specifications for MPI C code generation. \\textsc{MetaFORGE} combines correctness testing, compiler diagnostics, static-analysis findings, runtime measurements, and rank-level load-imbalance profiles into a scalar reward that drives textual-gradient refinement, while an external memory distills and retrieves reward-supported optimization knowledge across runs. Across six MPI tasks and three workload sizes, \\textsc{MetaFORGE} improves static-analysis quality, runtime, and load balance relative to zero-shot generation and generally exceeds the evaluated \\textsc{TextGrad} iterative baseline. A model-matched refinement ablation shows that the MetaFORGE advantage persists when its refinement model is reduced to \\texttt{gpt-4o}. An expanded retrieval ablation across all 18 task--workload configurations shows consistent runtime benefit and broad static-analysis and load-balance benefit from retrieved context. Leakage-controlled held-out and zero-update experiments further provide evidence that optimization knowledge persists in both the transferred skill and external memory under the evaluated protocol.",
    "published": "2026-11-24T18:49:19Z",
    "updated": "2026-11-24T18:49:19Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.33119"
  },
  {
    "id": "2611.33117",
    "title": "Read My Lips: Context-aware Lip Reading Using Language and Audio-Visual Models",
    "authors": [
      "Amir Razlighi",
      "Zhuo Ning",
      "Naomi Ken Korem",
      "Nisarg Patel",
      "Yiorgos Chrysanthou",
      "Daniel Cohen-Or",
      "Ali Mahdavi Amiri"
    ],
    "abstract": "Real-world speech is often partially observable: audio may be missing or corrupted by noise and competing speakers, while the speaker's lips remain visible. Recovering speech requires combining what can be heard, seen, and inferred from context. We introduce RML (Read My Lips), a collaborative method combining a lip reader, a language model, and an audio-visual generative model. The lip reader provides articulation hypotheses, the language model uses context to resolve ambiguous or missing words, and the audio-visual generator reconstructs synchronized speech while preserving speaker identity. Since source reliability varies, RML generates multiple reconstructions and uses the available evidence to favor the most reliable ones. This allows RML to handle missing audio, strong interference, and poor visual evidence without manually defined thresholds. Quantitative and qualitative experiments across these conditions show the benefit of combining visual, acoustic, and linguistic signals.",
    "published": "2026-11-24T18:48:44Z",
    "updated": "2026-11-24T18:48:44Z",
    "categories": [
      "cs.GR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.33117"
  },
  {
    "id": "2611.32094",
    "title": "Clinical3D-Bench: Evaluating and Improving Spatial Intelligence of Multimodal LLMs in Hospital Environments",
    "authors": [
      "Yang Bai",
      "Yingzhi Xia",
      "Ling Lin",
      "Jun Cheng",
      "Lin Fu",
      "Huazhu Fu"
    ],
    "abstract": "Spatial reasoning in hospitals requires tracking look-alike equipment, interpreting patient-relative directions, and judging passage widths, yet existing benchmarks provide limited coverage of these abilities. We introduce Clinical3D-Bench, a simulated benchmark with 3,368 questions of eight types on egocentric walkthroughs of 373 hospital-room layouts. Layouts follow hospital design guidelines, answers are computed from the 3D scenes, and paired scene states test whether models change their answers when relevant evidence changes. Videos are photorealistic, and ten physicians screened the layouts. Among 35 multimodal large language models (MLLMs), the best open and proprietary models reach 45.7% and 53.6% macro accuracy, against 40.8% for an answer prior and 79.0% for physicians on a subset, and 27 of 32 open models score below 40% on two-way patient-relative directions. Fine-tuning on Clinical3D-45K, our 44,750-question training set, lifts two MLLMs 16-20 points above the best proprietary model. 3D maps given to the fine-tuned MLLM as input go largely unused: replacing them with another video's, even when they are ground truth, barely changes its accuracy. The proposed GeoJeV instead lets the MLLM compute with 3D: it reconstructs a scene memory from each video, selects 3D operations and their arguments from the MLLM's question state, and adds their evidence to its option scores. It achieves the highest accuracy of all evaluated models, narrowing the gap to physicians.",
    "published": "2026-11-24T07:14:47Z",
    "updated": "2026-11-24T07:14:47Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.32094"
  },
  {
    "id": "2611.32093",
    "title": "MARGIN: A Risk-Aware Agent for Robot Program Refinement",
    "authors": [
      "Hongbo Duan",
      "Fan Du",
      "Haipeng Luo",
      "Bin Qian",
      "Zichao Nie",
      "Yilin Mi",
      "Yaopeng Tian",
      "Jiake Tian",
      "Siyuan Liu",
      "Yan Gao",
      "Fangming Liu",
      "Xueqian Wang"
    ],
    "abstract": "Robot-programming agents improve executable control policies through repeated testing and repair, yet binary success saturates while execution risk persists across unseen scenes. We introduce MARGIN, a risk-aware agent that converts successful robot rollouts into actionable evidence for program refinement. Its near-miss margin measures the fraction of the execution budget remaining in the slowest successful development rollout. The agent uses this signal to prioritize fragile programs, guide targeted repairs, and select revisions that preserve development success while increasing execution headroom. An exact safe-racing rule accelerates success-based candidate evaluation. We evaluate MARGIN across LIBERO-Pro, LIBERO-90, and Robosuite. In our 80-task LIBERO-Pro reproduction, 78 programs attain perfect development success while accounting for substantial failures on unseen seeds. The near-miss margin predicts held-out failures with an AUC of 0.774, and low-margin programs exhibit 2.97 times higher failure risk. Across two independent evaluation rounds spanning 37 unique LIBERO-Pro tasks, MARGIN reduces executed control steps by 10.7% and 15.0%, with reductions of 18.0-20.0% on LIBERO-90 and Robosuite. Safe racing reduces fixed-sequence candidate-evaluation episodes by 53.5% while retaining identical selections, and paired execution probes improve acceptance decisions by identifying hidden regressions. Together, these results establish near-miss evidence as an effective basis for risk-aware, budget-efficient robot program refinement.",
    "published": "2026-11-24T07:14:41Z",
    "updated": "2026-11-24T07:14:41Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.32093"
  },
  {
    "id": "2611.32088",
    "title": "From Memory Access to Evidence Sufficiency: Diagnosing and Addressing Demand--Evidence Misalignment",
    "authors": [
      "Shiyao Liu",
      "Yixing Fan",
      "Ruqing Zhang",
      "Xiaohui Yan",
      "Jiafeng Guo",
      "Xueqi Cheng"
    ],
    "abstract": "Long-term memory retrieval often returns query-relevant records, but relevance does not guarantee sufficient evidence: answering requires a set of records that jointly satisfies a question's factual, relational, temporal, and state constraints. We study this demand--evidence misalignment through MemPath, an interventional framework that diagnoses failures in memory access, demand coverage, and evidence utilization. Guided by this diagnosis, we propose BiDE-Mem, which represents questions as typed demands and uses them to guide retrieval and evidence organization. We formalize demand--evidence support; in the evaluated compact path, it is conveyed through provenance-aware evidence organization and Reader guidance rather than a separate generative four-state verification step. On LoCoMo, BiDE-Mem improves accuracy by 6.23 percentage points over Mnemis; on LongMemEval, it achieves 91.80%, with strong multi-hop and temporal performance. Supplementary Qwen-Reader evaluations place it first among seven systems on LoCoMo and LongMemEval-S under two judging protocols. Ablations and evidence-level analyses show that demand representation, retrieval, and evidence presentation each contribute to answer quality.",
    "published": "2026-11-24T07:10:43Z",
    "updated": "2026-11-24T07:10:43Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.32088"
  },
  {
    "id": "2611.32085",
    "title": "ExpGuard: Guarding Long-Horizon LLM Agents against Corrupted Experience",
    "authors": [
      "Yuzhou Chen",
      "Licheng Pan",
      "Zhixuan Chu",
      "Yunsheng Lu",
      "Yichen Sun",
      "Han Zheng",
      "Yan Wang",
      "Bingyu Zhu",
      "Haiwen Hong",
      "Longtao Huang",
      "Kui Ren"
    ],
    "abstract": "Long-horizon large language model (LLM) agents distill past trajectories into reusable experiences. Misleading or adversarial guidance in source trajectories can corrupt these experiences, allowing harmful instructions to persist across tasks and influence future agent actions. Assessing the risks of potentially corrupted experiences poses three challenges: (1) modeling provenance and execution dependencies before experience reuse, (2) learning task-conditioned risk from trajectory outcomes, and (3) repairing risky experiences at online inference. To address these challenges, we present ExpGuard, a framework for retrieval-triggered experience risk assessment and online repair. Specifically, to tackle challenge (1), ExpGuard integrates experience semantics with provenance and execution dependencies in a task-conditioned heterogeneous graph to predict attack and task-failure risks before experience reuse. To enable task-conditioned risk supervision and tackle challenge (2), we conduct matched counterfactual replays of each original experience and its minimally neutralized counterpart from the same task and environment checkpoint, deriving separate risk labels from differences in attack success and legitimate task completion. To tackle challenge (3) at inference time, ExpGuard repairs candidate experiences flagged as high-risk by the graph-based predictor at retrieval and re-predicts their risks before they enter the agent's active experience context. Extensive experiments demonstrate the effectiveness of ExpGuard in identifying risky experiences and defending agents against experience corruption.",
    "published": "2026-11-24T07:09:54Z",
    "updated": "2026-11-24T07:09:54Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.32085"
  },
  {
    "id": "2611.32084",
    "title": "The algorithmic behavioral sink: Modeling the transition to irreversible demographic collapse",
    "authors": [
      "Feng Yu"
    ],
    "abstract": "In 2025, the vast majority of major global economies reported a Total Fertility Rate below the replacement level of 2.1. This synchronized collapse has persisted despite extensive pro-natalist financial interventions, revealing a structural limitation in conventional linear demographic models. This paper proposes that the ubiquity of mobile internet and Artificial Intelligence acts as a synthetic mating disruptor, precipitating a non-linear phase transition in human pair-bonding dynamics. Treating the marriage market as a complex system governed by thermodynamic constraints, we present a Fermi-Dirac selection model, using national income distributions as the input spectrum and fitted with Japanese longitudinal data to illustrate how digital hyper-reality generates an increasingly prohibitive Marriage Energy Barrier. Our model quantifies a Tech Factor that decouples female mating expectations from local economic realities during initial courtship, a distortion we predict will be severely exacerbated as AI evolves into an emotional substitute. Projections indicate that this substitution effect is accelerating; without intervention, the world post 2040 risks entering an irreversible demographic contraction, as the sudden surge in TFR required for recovery is biologically impossible. Ultimately, this framework explains why traditional financial subsidies fail to reverse falling birth rates and suggests that digital convenience may represent a behavioral Great Filter that erodes the imperative for species persistence.",
    "published": "2026-11-24T07:08:31Z",
    "updated": "2026-11-24T07:08:31Z",
    "categories": [
      "physics.soc-ph",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.32084"
  },
  {
    "id": "2611.32074",
    "title": "Not the Scalar, but Its Evolution: Robust Source Attribution for Generated Images",
    "authors": [
      "Chao Wang",
      "Zijin Yang",
      "Yaofei Wang",
      "Yuang Qi",
      "Weiming Zhang",
      "Kejiang Chen"
    ],
    "abstract": "The widespread deployment of latent generative models (LGMs) makes generated image source attribution essential for copyright auditing and data governance, yet practical attribution should remain reliable under common post-processing and platform-induced processing. Existing reconstruction-based attribution methods summarize an image's reconstruction response to a single global scalar, such as the reconstruction error or the ratio of two consecutive errors. These summaries discard channel-frequency structure, allowing image content and post-processing variation to obscure source evidence and making attribution after spreading difficult. We instead uncover a more stable source-discriminative cue under post-processing: the frequency-resolved evolution of residual energy across repeated applications of the same reconstruction operator. Motivated by this insight, we characterize a phenomenon we term Spectral Contraction and use it to build SpCon, a source-attribution framework that accesses only the target model's VAE. SpCon obtains adjacent residuals through two deterministic reconstructions, builds a spectral-contraction representation from their frequency-resolved relative energy change, and aggregates Student-t response densities for each source-condition pair over a finite set of fitted reference components. The same representation supports three settings according to non-belonging reference availability: none (Target-Only, TO; belonging references only), external out-of-domain sources (External-Reference, ER), or known in-domain competitors (Known-Reference, KR). Across seven LGMs, TO, ER, and KR attain average AUROC/AP of 0.8786/0.6344, 0.9404/0.7886, and 0.9652/0.8626 over the 35 conditions, all outperforming the strongest baseline (0.8154/0.5277), and achieve 0.8581/0.5507, 0.9369/0.7549, and 0.9734/0.8773 on the three social platforms.",
    "published": "2026-11-24T06:59:46Z",
    "updated": "2026-11-24T06:59:46Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.32074"
  },
  {
    "id": "2611.32067",
    "title": "LoopDVR: Looped Transformer for Efficient Dense Visual Recognition",
    "authors": [
      "Sirui Liang",
      "Xuanlong Yu",
      "Longfei Liu",
      "Xiaodong Cun",
      "Xi Shen"
    ],
    "abstract": "We propose LoopDVR, a framework for converting pretrained Transformer-based dense visual recognition models into parameter-efficient looped networks. Rather than reducing the network width or depth directly, LoopDVR reuses Transformer blocks across layers in both the ViT backbone and Transformer decoder, reducing the number of parameters while retaining the original computational structure. However, naively sharing parameters can disrupt the distinct transformations learned at different depths. To address this challenge, we identify suitable sharing groups based on inter-layer representation dissimilarity and keep the final backbone block independent for multi-scale feature construction. We then initialize each shared backbone block with the pretrained weights of its group's terminal layer to better preserve the learned representations. An independent Loop Adapter at each layer further helps retain depth-specific transformations within shared blocks. Subsequently, we distill visual representations into the looped backbone and integrate it with a looped decoder for task-specific training. Experiments demonstrate that LoopDVR achieves the best accuracy--parameter trade-offs across dense recognition tasks. Compared with the reference models, it reduces parameters by approximately 28% while maintaining competitive accuracy. Notably, LoopDet-S achieves 50.9 box AP with only 7.0M parameters, highlighting its effectiveness in compact models.",
    "published": "2026-11-24T06:55:42Z",
    "updated": "2026-11-24T06:55:42Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.32067"
  },
  {
    "id": "2611.32063",
    "title": "Integral DeltaNet: Improved Linear Attention with Adaptive Memory Integration",
    "authors": [
      "Junsoo Oh",
      "Jihun Yun",
      "Junhyuck Kim",
      "Hanbaek Lyu"
    ],
    "abstract": "Linear attention replaces softmax attention with a linear formulation, enabling linear-time computation with a fixed-size recurrent state instead of a growing key-value cache. These computational and memory advantages have attracted growing interest in linear attention for long-context language modeling. However, compressing past information into a fixed-size state causes memory collisions that hinder long-context understanding. Although DeltaNet mitigates memory collisions through delta-rule updates and Gated DeltaNet extends this approach with gating, these mechanisms may also discard information relevant to future predictions. To address this limitation, we introduce Integral DeltaNet, which maintains two complementary recurrent states: a fast-updating delta state that captures current key-value associations and an integral state that preserves a weighted history of the delta state. At readout, the model adaptively combines these states to access information across different timescales. We further derive a chunkwise parallel formulation that enables hardware-efficient training. We evaluate Integral DeltaNet using 340M and 1.3B parameter models trained from scratch on 15B and 100B FineWeb-Edu tokens, respectively. Comparisons with strong recurrent baselines show improved overall performance in language modeling, commonsense reasoning, real-world and synthetic retrieval, long-context understanding, and length extrapolation. We also compare training throughput and activation memory, as well as decoding latency and memory.",
    "published": "2026-11-24T06:50:52Z",
    "updated": "2026-11-24T06:50:52Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.32063"
  },
  {
    "id": "2611.32055",
    "title": "More Powerful, Less Verifiable? Mitigating Hard-to-Verify Hallucinations in MLLM's Reinforcement Learning",
    "authors": [
      "Jianhong Pang",
      "Ziyi Ye",
      "Qiuxia Hou",
      "Yanhao Zhang",
      "Zuxuan Wu"
    ],
    "abstract": "Reinforcement learning (RL) strengthens model capabilities through feedback from humans and environments. However, emerging evidence suggests that reward optimization can produce outputs whose errors are harder for humans to detect. To address this issue, we construct ITHV (the Image-Text Hallucination Verifiability Dataset), comprising 2,728 visually grounded instances that distinguish between obvious hallucinations, which humans readily detect, and elusive hallucinations, which humans struggle to identify. We then propose DAPO-V, an extension of DAPO that maximizes correctness subject to a budget on verifiability-aware risk. Specifically, DAPO-V combines a verifiability-aware reward with adaptive dual control, where larger penalties are assigned to incorrect responses on questions with lower human verification accuracy. An adaptive multiplier further adjusts the penalty strength according to risk-budget violations. Across three MLLM base models, DAPO-V improves overall accuracy while substantially improving accuracy on elusive hallucination questions by 5.78--9.72 percentage points over accuracy-only DAPO. We further test DAPO-V with a blinded human study, which shows that hallucinations are more readily detected in DAPO-V than those of the base model.",
    "published": "2026-11-24T06:42:45Z",
    "updated": "2026-11-24T06:42:45Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.32055"
  },
  {
    "id": "2611.32054",
    "title": "SurgGenesis: A Generative Surgical World Model for Future-Aware Surgical Understanding",
    "authors": [
      "Qirui Zhong",
      "Quande Liu",
      "Yang Chen",
      "Cheng Xue"
    ],
    "abstract": "Surgical scene understanding is constrained by data scarcity and long-tail class imbalance, as annotating surgical videos demands scarce clinical expertise while rare procedural events remain underrepresented. We tackle this through data generation and propose SurgGenesis, a generative surgical world model that learns future surgical state transitions in a latent space from visual observations and textual procedural descriptions, serving as a scalable surgical data engine. To adapt a large-scale video diffusion model to the data-scarce surgical domain without catastrophic forgetting, we introduce a three-stage progressive LoRA strategy that incrementally injects endoscopic visual priors, procedural semantics, and spatial motion cues. Rather than judging generation by visual fidelity alone, we validate SurgGenesis along two axes that separate a world model from a generic generator: (i) future-awareness, by comparing predicted futures against the real future through a GT-latent prediction gap and temporal-horizon analysis, and (ii) action-faithful usefulness, by checking that generated clips contain the commanded surgical triplet and that using them to rebalance long-tail events and drive downstream understanding (segmentation, triplet recognition, 3D reconstruction) yields action-specific gains. Conditioned futures therefore complement conventional long-tail sampling. Code: https://zh-qr.github.io/SurgGenesis",
    "published": "2026-11-24T06:36:42Z",
    "updated": "2026-11-24T06:36:42Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.32054"
  },
  {
    "id": "2611.32053",
    "title": "EffectWAM: Learning Action-Grounded Effects for Robot Manipulation",
    "authors": [
      "Yuan Zhang",
      "Hao Cui",
      "Jingfei Ni",
      "Meiyi Wang",
      "Xin Nie",
      "Chi Liu",
      "Wenjie Xu",
      "Lin Gao",
      "Hao Li",
      "Xianhe Zhang",
      "Jiajia Wu",
      "Diyuan Liu",
      "Jia Pan",
      "Chao Ji"
    ],
    "abstract": "World-action models connect visual prediction with executable robot control. We present EffectWAM, which develops this connection through three complementary components: Effect, camera positional encoding (CaPE), and Action Grounding. Effect represents visual change as the difference between independently encoded future observations and a shared current-observation anchor. CaPE conditions endpoint pooling on relative camera pose when reliable extrinsics are available, while sharing the same learned parameters with pose-free pooling for uncalibrated trajectories. Action Grounding trains the visual representation to retain measured changes in end-effector pose and gripper state. An exponential moving average of the observation encoder supplies Effect targets. A shared generation expert learns to jointly predict Effect and an executable action chunk through flow matching, and reuses the sampled pair to generate future video on demand. This allows the controller to execute actions without waiting for video synthesis. We train on more than 20,000 hours of heterogeneous embodied data, excluding unused chain-of-thought data, and accommodate dataset-specific joint, end-effector, and hand-pose representations. Our evaluation uses the Small (8B) configuration on all five benchmarks and additionally evaluates the Large (26B) configuration on RoboDojo. Experiments examine closed-loop manipulation across complementary benchmarks, and comparisons across multiple baseline policies show consistent improvements from Action Grounding.",
    "published": "2026-11-24T06:36:34Z",
    "updated": "2026-11-24T06:36:34Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.32053"
  },
  {
    "id": "2611.32046",
    "title": "From Rule-based to Agentic: LLM Agent based Real-time Control of Urban Drainage Systems for Flooding and Sewer Overflow Mitigation",
    "authors": [
      "Wenchong Tian",
      "Shixun Li",
      "Ruozhou Lin",
      "Peng Ye",
      "Zhiyu Zhang",
      "Shi Tao",
      "Yu-Qi Wang",
      "Ling Shi",
      "Mingfu Guan",
      "Haoran Duan",
      "Zhiguo Yuan"
    ],
    "abstract": "Real-time control (RTC) for urban drainage systems (UDS) remains hampered by sparse in-network sensing. While heterogeneous multi-modal meteorological early warnings often contain decision-critical information for UDS RTC, none of the existing approaches can exploit such externally-sourced information within the control workflow. Here we introduce AgenticAI-Control, an agentic artificial intelligence framework able to assimilate multi-source meteorological early warnings in RTC. Two coupled large language model agents are integrated to generate control strategies by retrieving meteorological early-warnings and fusing them with domain engineering expertise. Validated via simulation studies of a combined sewer catchment in eastern China across 10 real-world rainfall events, the AgenticAI-Control achieved 69.1-90.6% reduction in aggregated flood and overflow volumes compared to the rule-based baseline control. Rigorously standardized prompt engineering and modular workflow constraints substantially compress performance disparities among four distinct LLMs. Our work establishes AgenticAI as a viable tool to unify multi-source meteorological monitoring and practitioner domain knowledge, surmounting longstanding monitoring limitations of UDS RTC and delivering cost-efficient, robust intelligent control solutions for sensor-sparse sewer infrastructures.",
    "published": "2026-11-24T06:31:14Z",
    "updated": "2026-11-24T06:31:14Z",
    "categories": [
      "cs.AI",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2611.32046"
  },
  {
    "id": "2611.30895",
    "title": "Speak When You See It: Proactive Task Assistants Should Wait for Evidence, Not the Clock",
    "authors": [
      "Bohe Chen"
    ],
    "abstract": "Proactive assistants that guide people through physical tasks must decide, every few seconds, whether a step is complete and whether a mistake has occurred. We find that two benchmarks for this task largely reward knowing when rather than seeing what: a timer that never looks at the video, raising an alarm at 25 s and confirming each step at 30 s, reaches a mistake F1 of 0.373 on Ego-MC-Bench, above every published result (at most 0.27). We formalize this as the video-blind frontier, the best trade-off between completion accuracy and mistake F1 that policies reach from the elapsed time, the instruction and training statistics alone: every published per-step result on Ego-MC-Bench lies inside it, and so do all twelve zero-shot models we run on QICD. To move beyond it, we introduce Evidence-Contrastive Training (ECT): fine-tune on the benchmark's own questions, and pair its positives with negatives from the same recording at the same elapsed time, so that elapsed time cannot separate the two sides of a pair. Trained on 209 QICD videos in about 15 GPU-hours, a 2B model with ECT crosses the frontier on both benchmarks in all four seeds; transferred to Ego-MC-Bench without adaptation, it confirms 59% of mistake-free steps in time, against 30% for a published model with the same backbone trained on about 25k synthetic counterfactuals and real recordings. Its decisions follow the video beyond what timing explains: at equal elapsed time it tells a finished step from an unfinished one in 90-92% of test pairs, where the instruction's typical duration reaches 65%, rescaling the time stamps between the frames leaves it essentially unchanged, and swapping in another recording, of the same recipe where one exists, cuts its completion accuracy by two thirds. The code and model weights will be publicly released.",
    "published": "2026-11-23T15:57:25Z",
    "updated": "2026-11-23T15:57:25Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.30895"
  },
  {
    "id": "2611.30891",
    "title": "AeroJEPA: A Two-Stage Framework for Aerosol Forecasting with Joint-Embedding Predictive Learning",
    "authors": [
      "Zitong Shuai",
      "Zengliang Zang",
      "Chunlei Shi",
      "Lang Liu",
      "Ning Liu",
      "Yiwen Hu",
      "Dan Niu",
      "Chenyan Zhou",
      "Shangjian Xie"
    ],
    "abstract": "Aerosol forecasting requires integrating sparse ground observations and modeling meteorologically driven concentration evolution and spatial structure. However, analysis-initialized forecasts make limited explicit use of historical observations, while pointwise regression tends to smooth local variations and provides limited constraints on fine spatial structures. In this work, we propose AeroJEPA, a two-stage joint-embedding predictive framework for regional surface PM$_{2.5}$ forecasting. Specifically, Stage I fuses historical observations, model backgrounds, and meteorological information to predict an initial future state, meteorological conditions, and multi-scale structures. Morphology-guided encoding and joint-embedding predictive supervision support learning future spatial representations, supplementing concentration regression with structural constraints. Stage II uses predicted meteorology to guide state refinement and incorporates coarse- and fine-scale structures into state updates and decoding to generate the concentration field at a single future time step. Experiments show that AeroJEPA reduces gridded and independent-station RMSE by 17.23\\% and 7.90\\%, respectively, relative to PFGNet, while improving spatial consistency with analysis fields. In a 48 h recursive forecasting case study, AeroJEPA generally achieves lower RMSE and MAE than the numerical forecasts across the forecast period, indicating promising short- to medium-range forecasting performance.",
    "published": "2026-11-23T15:55:33Z",
    "updated": "2026-11-23T15:55:33Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.30891"
  },
  {
    "id": "2611.30888",
    "title": "A High-Resolution UAV Benchmark Dataset and Baseline Evaluation for Teak Crown Segmentation in Western Ghats Tropical Forests",
    "authors": [
      "Anand S Sahadevan",
      "Sunita Arya",
      "Anup Kumar Das",
      "Bimal Kumar Bhattacharya",
      "S Manthira Moorthi"
    ],
    "abstract": "Accurate teak-tree segmentation from high-resolution drone imagery is critical for sustainable plantation management, yet lacks dedicated benchmarks. We introduce TeakTreeNet, a comprehensive dataset and evaluation protocol for binary teak-tree segmentation at native 2cm resolution. Four state-of-the-art architectures: U-Net, PSPNet, DeepLabV3, and SegFormer were rigorously benchmarked across scratch and ImageNet-pretrained settings with three-seed reproducibility. SegFormer establishes new SOTA performance with F1 0.938 +/- 0.002 (Teak), IoU 0.968 +/- 0.001 (Teak), and Accuracy 0.986 +/- 0.001, outperforming all pretrained CNNs. Domain-adaptive training suffices, as the scratch SegFormer outperforms ImageNet pretrained baselines, avoiding large-scale pretraining overhead. Comprehensive analysis reveals Transformer's superior boundary delineation for dense plantation scenarios. TeakTreeNet provides researchers with 6391 expertly annotated drone patches (224x224) and establishes reproducible evaluation protocols, enabling direct comparison of future methods. Our benchmark demonstrates SegFormer's optimal balance of accuracy, efficiency, and deployability for operational forestry monitoring of teak plantations for India's western tropical forests.",
    "published": "2026-11-23T15:54:10Z",
    "updated": "2026-11-23T15:54:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.30888"
  },
  {
    "id": "2611.30879",
    "title": "Learning the Next Best Move with Visual Diffusion Models",
    "authors": [
      "Amir Razlighi",
      "Ali Mahdavi Amiri",
      "Yiorgos Chrysanthou",
      "Andrey Voynov",
      "Daniel Cohen-Or"
    ],
    "abstract": "In this paper, we show that visual diffusion models can learn to predict the next best move (NBM) in tasks requiring sequential reasoning and lookahead, without explicitly exploring future steps or exhaustive searching at inference. Previous work demonstrated that these models can generate complete solutions to geometric and reasoning problems. Here, we show that simple fine-tuning on visual state--NBM pairs enables a pretrained model to select actions whose value depends on consequences several steps ahead. Each move is predicted directly in image space from the current state, without an explicit symbolic representation or search procedure. Repeated NBM predictions then construct a solution one decision at a time. We demonstrate this capability on chess puzzles and tile-based pathfinding, and show that it extends to Connect Four, Go and billiards. In chess, the model predicts legal moves and finds the best move far more often than by recalling similar training positions, including piece sacrifices whose benefit emerges only through later tactical continuations. In pathfinding, it constructs shortest paths on uniform-cost maps and cost-optimal routes across terrain tiles with different traversal costs, choosing longer routes when they are cheaper overall. These costs are learned implicitly from examples, without numerical cost supervision. These results show that direct visual move prediction can support globally informed decisions and successful sequential problem solving.",
    "published": "2026-11-23T15:46:19Z",
    "updated": "2026-11-23T15:46:19Z",
    "categories": [
      "cs.GR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.30879"
  },
  {
    "id": "2611.30874",
    "title": "Bridging Continuous-Time MAPF and Industrial AGV Fleet Coordination with Lazy Priority-Based Search",
    "authors": [
      "Federico Signorile",
      "Raffaele Carli",
      "Alessandro Bertogli",
      "Roberto Olmi",
      "Sven Koenig",
      "Mariagrazia Dotoli"
    ],
    "abstract": "Continuous-time multi-agent path finding on roadmaps (MAPF$_R$) offers a principled way to coordinate robot fleets with geometric collision avoidance, yet its deployment on industrial automated guided vehicle (AGV) infrastructures remains challenging, as highly connected and redundant roadmaps amplify both safe-interval reasoning and multi-agent interaction handling. To bridge this gap, we formalize AGV-MAPF$_R$-CTC, a configuration-space variant of MAPF$_R$ with precomputed continuous-time conflicts that enables the reuse of MAPF$_R$ solvers for AGV fleet coordination with minimal changes. We then revisit continuous-time priority-based search (CPBS), identifying the boundary conditions required by its safe interval path planning (SIPP) low-level planner under priority-induced constraints and enabling earlier solution detection. As a central contribution, we analyze the structure of the priority search space, clarifying which agents are affected by each priority refinement and when replanning can be avoided. Building on this analysis, we introduce a novel algorithm, Lazy-CPBS, which materializes high-level nodes lazily: a child's plans are computed only when it is expanded, so siblings that are never expanded cost no low-level search. Experiments on standard MAPF benchmarks and on industrial AGV roadmaps imported from a proprietary digital-twin simulator show that CPBS-based solvers remain effective well beyond the agent counts reachable by optimal MAPF$_R$ solvers, while Lazy-CPBS substantially reduces CPBS overhead and offers the most consistent robustness/runtime trade-off across industrial layouts.",
    "published": "2026-11-23T15:43:31Z",
    "updated": "2026-11-23T15:43:31Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2611.30874"
  },
  {
    "id": "2611.30873",
    "title": "Semantic-aware Decoding for Diverse Text-to-SQL under Schema Ambiguity",
    "authors": [
      "Yuxuan Jiang",
      "Anna Mitsopoulou",
      "Apostolos Koukouvinis",
      "Yannis Velegrakis",
      "Georgia Koutrika"
    ],
    "abstract": "Real-world text-to-SQL systems often face schema ambiguity, where a question can map to multiple plausible schema elements. To support downstream disambiguation, SQL generation systems should include diverse interpretations among their top-k predictions. However, large language models (LLMs) typically favor a single interpretation, producing highly skewed outputs. We propose Semantic-aware Logit Adjustment (SLA), a training-free decoding method that promotes diverse SQL generation by adjusting token logits based on semantic similarity between schema elements. Unlike prior approaches that rely on reasoning-intensive prompting or task-specific fine-tuning, SLA is efficient, model-agnostic, and easy to deploy. Experiments show that SLA consistently improves interpretation coverage over standard decoding and remains competitive with existing diversity-oriented methods at substantially lower inference cost.",
    "published": "2026-11-23T15:43:16Z",
    "updated": "2026-11-23T15:43:16Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.30873"
  },
  {
    "id": "2611.30869",
    "title": "XFreq: Geometry-Aligned Cross-View Residual Learning for Sparse 3D Ultrasound Reconstruction",
    "authors": [
      "Yuhuan Lu",
      "P. Ellen Grant",
      "Davood Karimi"
    ],
    "abstract": "Three-dimensional (3D) ultrasound provides valuable volumetric context for anatomical assessment, motivating reconstruction from widely available two-dimensional (2D) slices. Sparse slices leave much of the volume unobserved, even when their acquisition poses are known. Existing methods interpolate observed intensities or incorporate learned 2D image features into 3D reconstruction, but their complementary roles in predicting smooth structure and residual details remain less explored. We introduce XFreq, a geometry-aligned framework for sparse 3D ultrasound reconstruction. It uses known slice poses and finite footprints to query 2D image features at 3D locations, complementing splatted intensities and sampling geometry. A low-frequency decoder predicts a smooth 3D field from the splat representation, while a high-frequency decoder additionally incorporates the queried 2D features to predict residual details. A learned gating module regulates the residual contribution based on geometry and cross-slice feature variation. We evaluate XFreq on an in-house fetal brain dataset and the public CETUS cardiac dataset, using slices resampled from 3D ultrasound volumes and fivefold cross-validation. Among the compared methods, XFreq achieves the highest PSNR and SSIM in most settings across both datasets, reaching 26.82 dB PSNR on CETUS with 32 input slices. Ablation studies further show the contributions of local feature querying, geometric cues, and residual prediction, with gains generally increasing as more input slices are used. Our findings highlight the value of geometry-aligned cross-view feature integration for reconstructing 3D ultrasound volumes from sparse 2D slices.",
    "published": "2026-11-23T15:41:28Z",
    "updated": "2026-11-23T15:41:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.30869"
  },
  {
    "id": "2611.30859",
    "title": "CableMoE: Harm-Regularized Mean-Residual Expert Fusion for Transmission-Corridor Segmentation",
    "authors": [
      "Shima Salehi"
    ],
    "abstract": "Semantic mapping of transmission corridors benefits from heterogeneous LiDAR and image-guided predictors, but replacing a strong ensemble with a learned router can damage rare electrical assets. We introduce CableMoE, a post-hoc mixture of four frozen segmentation experts. Its deployable prediction is a calibrated residual around availability-aware probability averaging, while a harm penalty discourages extra loss on points that the mean already classifies correctly. A matched component study shows why each design choice is needed: an unconstrained learned mixture loses 1.032 mIoU points relative to probability mean, harm regularization restores 0.359 points at fixed capacity, and removing an unnecessary point-wise gate slightly improves accuracy and stability. With three zones for fitting, two disjoint zones for residual-strength selection, and router-untouched t5b5 for final reporting, CableMoE obtains 84.906% mIoU and 98.140 % overall accuracy. This is +10.000 points over SPT and +0.263 over probability mean; all three seeds improve the latter. Across pylon, conductor, structural-cable, and insulator classes, macro-IoU rises from 84.517% for SPT and 97.153% for probability mean to 98.144 %. The results support conservative residual composition, not a claim of a new segmentation backbone or universal state of the art",
    "published": "2026-11-23T15:35:56Z",
    "updated": "2026-11-23T15:35:56Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.30859"
  },
  {
    "id": "2611.33109",
    "title": "RenGen: Generating Images with as Many Tokens as the Scene Needs",
    "authors": [
      "Savya Khosla",
      "Jay Mahajan",
      "Akin Tuna Sakalli",
      "Derek Hoiem",
      "David Forsyth",
      "Alex Schwing"
    ],
    "abstract": "We present RenGen, a latent diffusion model that generates simple scenes from a few tokens and busy scenes from many, saving time and compute on simple scenes without losing realism. Most latent generators represent every image as a fixed grid of patch tokens, so a simple image costs as much to generate as a complex one. Prior methods that vary the token count through content-adaptive tokenization lose image quality as the count shrinks. RenGen instead trades scene complexity, rather than image quality, for fewer tokens. It does so by generating in the latent space of a pretrained region encoder, where each token represents one region of the image, and a decoder renders these region tokens back into pixels. Unlike patch tokens, region tokens cover areas of varying shape and position, so each token must capture both what its region contains and where it lies on the image canvas. We encode this spatial extent by adding positional embeddings to the encoder features before pooling, and we generate it by anchoring each token to a single randomly sampled point, from which the generator infers the region's shape, size, and content. At sampling time, the number of anchor points sets the trade-off between scene complexity and compute. On ImageNet $256{\\times}256$, RenGen reaches a gFID of 1.34 with 88 tokens per image on average, the best among methods that vary their token count. It approaches the quality of RAEv2, a state-of-the-art patch-based model, at $2.5{\\times}$ lower latency, advancing the Pareto frontier of generation quality versus compute. RenGen's gFID stays flat across scene complexity while latency varies by $2.4{\\times}$ between simplest and busiest scenes, and its autoencoder reconstructs nearly as well as RAEv2 (rFID 0.32 vs. 0.30) with $2.9{\\times}$ fewer tokens.",
    "published": "2026-11-23T15:33:03Z",
    "updated": "2026-11-23T15:33:03Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.33109"
  },
  {
    "id": "2611.30850",
    "title": "Age and Gender Estimation from Face and Ocular Smartphone Images via Identity Transfer and Ordinal Learning",
    "authors": [
      "Fernando Alonso-Fernandez",
      "Kevin Hernandez-Diaz",
      "Jose Maria Buades",
      "Josef Bigun"
    ],
    "abstract": "We investigate the transferability of identity-recognition representations to gender and age estimation from face and ocular images. Three CNNs of varying complexity, pre-trained for face or ocular identity recognition, are evaluated using fixed features with SVMs and end-to-end adaptation. Experiments use 11,299 frontal smartphone images from Adience, following its predefined five-fold protocol and subject-disjoint validation. Results show that domain-matched identity pre-training outperforms direct ImageNet and scratch initialisation in end-to-end training, while combining both ocular regions narrows the gap with full-face estimation, especially for age. We additionally introduce an ordinal loss that exploits the ordering of age groups and consistently improves 1-off accuracy across architectures and input regions. Across the evaluated configurations, best gender accuracies reach 88.1% for the face and 82.9% for combined ocular regions, while age estimation reaches 59.0% exact and 93.1% 1-off accuracy for ocular images, versus 57.6% and 95.2% for the full face. To our knowledge, these are the highest ocular age accuracies reported on Adience.",
    "published": "2026-11-23T15:29:50Z",
    "updated": "2026-11-23T15:29:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.30850"
  },
  {
    "id": "2611.30844",
    "title": "DyLoMo-DiT: Dynamic Looped Mixture-of-Experts Diffusion Transformers",
    "authors": [
      "Lernie Li",
      "Yuanliu Liu",
      "Pengfei Xiong",
      "Wei Zhang"
    ],
    "abstract": "Diffusion Transformers (DiTs) scale model capacity by increasing both parameter count and computation. Mixture-of-Experts (MoE) variants expand parameter capacity while keeping per-token computation roughly fixed, but still require substantial parameter storage. In this paper, we propose Dynamic Looped MoE DiT (DyLoMo-DiT), which reuses parameters rather than adding them: a weight-shared loop repeatedly applies the middle layers, while sparse experts allocate parameter capacity across tokens. This design deepens the network without adding parameters, freeing the parameter budget for other uses, such as more experts or more distinct layers. It also allocates compute dynamically, varying the number of passes across noise levels. Experiments show that DyLoMo-DiT makes more effective use of parameter and compute budgets, with further gains from assigning more passes to low-noise steps. On ImageNet $256\\times256$, DyLoMo-DiT reduces FID by 11-24% relative to DiT and 36-56% relative to DiT-MoE at matched parameter and compute budgets. For text-to-image generation, a scaled DyLoMo-DiT achieves a higher GenEval score than FLUX.1 (0.714 vs. 0.673), with less than one tenth of its active parameters (1.05B vs. 12B).",
    "published": "2026-11-23T15:27:20Z",
    "updated": "2026-11-23T15:27:20Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.30844"
  },
  {
    "id": "2611.30840",
    "title": "Certified Defense against Adversarial Patches on Traffic Signs via Mask-Aware Training",
    "authors": [
      "Rudra Saxena",
      "Vishal Dev Verma",
      "Rohan Sharma",
      "Palani Thanaraj K"
    ],
    "abstract": "Adversarial patches are a practical threat to traffic-sign recognition: a small sticker on a sign can change a classifier's decision. PatchCleanser is a certified defense that applies two rounds of masking and, for every image it certifies, provably returns the correct label for any patch that fits inside one mask. We show that on traffic signs the defense certifies almost nothing when paired with a normally trained classifier (1.7% to 4.8% certified accuracy on GTSRB), because a single mask can hide the small central symbol that distinguishes sign classes. We propose mask-aware training, which trains the classifier on images occluded by random pairs drawn from the defense's own mask set, with a sampling bias toward masks over the sign's centre. The defense, mask set and certification procedure are unchanged, so the guarantee is preserved. For an ImageNet-pretrained ResNet-50, mask-aware training raises certified accuracy from 4.8% to 60.0%. Under real per-image adversarial patches, the defended ResNet-50 reaches 85.7% accuracy, versus 74.6% for the original PatchCleanser with a normally trained ResNet-50.",
    "published": "2026-11-23T15:24:41Z",
    "updated": "2026-11-23T15:24:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.30840"
  },
  {
    "id": "2611.28963",
    "title": "Learning Land-Surface Hydrology World Model from Satellite Observations",
    "authors": [
      "Suya Li",
      "Zekun Qi",
      "Xiaochong Xu",
      "Duo Zhang"
    ],
    "abstract": "A world model should tell us not only what will happen, but what would happen under a different action. Learned Earth models now forecast remarkably well, yet forecast skill says little about what their state means or how it responds to a changed driver. We build LandWM, a world model of land-surface water in which rain is the action, learned from seven years of SMAP and CYGNSS observations: physical observation operators tie its latent state to soil water, and a mass-conserving balance governs how that state responds to rain. Over the U.S. Southern Great Plains, the model, never shown a soil-moisture value, tracks 28 in-situ probes as well as the operational SMAP Level-4 product, even from CYGNSS alone, and a storm added to the forcing of a station's cell wets its soil as natural storms wet the probes. Replace either piece and the forecasts stay, but the meaning goes: with neural operators, only a probe fitted to the stations finds the soil water; with a generic recurrent transition, rain on a single cell barely moves it. Yet when the same rain covers the whole region the two transitions swap roles, and the conserving one responds too weakly. Grounding makes a world model readable; its response to actions must be tested under more than one kind of intervention.",
    "published": "2026-11-21T17:56:27Z",
    "updated": "2026-11-21T17:56:27Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.28963"
  },
  {
    "id": "2611.28957",
    "title": "Micro Operational Robustness of LLMs on Code Generation",
    "authors": [
      "Debalina Ghosh Paul",
      "Hong Zhu",
      "Ian Bayley"
    ],
    "abstract": "It is now common practice in software development for large language models (LLMs) to be used to generate program code. It is desirable to evaluate the robustness of LLMs for this usage. This paper is concerned in particular with how sensitive LLMs are to variations in descriptions of the coding tasks. However, existing techniques for evaluating this robustness are unsuitable for code generation because the input data space of natural language (NL) descriptions is discrete and sparse. To address this problem, we propose a robustness evaluation method called scenario domain analysis, which aims to find the expected minimal change in the NL descriptions of coding tasks that would cause the LLMs to produce incorrect outputs. We have formally proved the theoretical properties of the method and also conducted extensive experiments to evaluate the robustness of four state-of-the-art LLMs: Gemini-pro, Codex, Llamma2 and Falcon 7B, and have found that we are able to rank these with confidence from best to worst. Moreover, we have also studied how robustness varies in different scenarios, including the variations with the topic of the coding task and with the complexity of its sample solution, and found that robustness is lower for more complex tasks and also lower for more advanced topics, such as multi-threading and data structures.",
    "published": "2026-11-21T17:48:23Z",
    "updated": "2026-11-21T17:48:23Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.28957"
  },
  {
    "id": "2611.28947",
    "title": "Don't Sleep, Keep Watch: Proactive Perception for Computer-Use Agents",
    "authors": [
      "Jiaqi Su",
      "Jie-Jing Shao",
      "Yichen Liu",
      "Long-Kai Huang",
      "Haiyan Yin"
    ],
    "abstract": "Computer-use agents (CUAs) built on vision-language models are increasingly entrusted with long-horizon tasks in live desktop, web, and mobile environments, where the screen keeps changing on its own. However, current CUAs lack real-time situational awareness: they perceive the environment through discrete snapshots, and the substantial inference latency of VLMs, compounded by highly dynamic interfaces, opens a perception-action gap in which the observed state frequently becomes stale before the corresponding action is executed. To bridge this gap, we present NightWatch, a plug-and-play framework that endows any CUA with continuous, temporally grounded perception without changing the agent's model, prompt, or action space. NightWatch couples the VLM agent with NightWatch-0.8B, a lightweight System-1 model that performs streaming monitoring of the interface state and keeps the agent synchronized with the evolving environment at low computational cost and latency, thereby grounding each decision in the current state rather than an outdated snapshot and reducing both stale actions and idle waiting while preserving task success. Experiments on desktop and dynamic web environments (OSWorld-Verified and DynaCU-Bench) show that NightWatch, driven by a watcher of only 0.8B parameters, reduces non-reasoning wall-clock time by 33% and wasted time by 53% on OSWorld while keeping task success on par, raises success on DynaCU-Bench from 39.5% to 44.2% with the large VLM agent, and is more efficient than passive-watching baselines such as AOI and PUSV under the same screenshot-only input, as well as a System-1 decision model more than $30\\times$ its size. Overall, NightWatch demonstrates that the timing of perception is as critical as its content, marking a step toward agents that maintain continuous awareness of their environment rather than perceiving it turn by turn.",
    "published": "2026-11-21T17:31:05Z",
    "updated": "2026-11-21T17:31:05Z",
    "categories": [
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28947"
  },
  {
    "id": "2611.28943",
    "title": "SANA-Robot: Efficient World Action Model with Hybrid Memory",
    "authors": [
      "Yuyang Zhao",
      "Zekai Li",
      "Yicheng Pan",
      "Jiaming Tang",
      "Zhuoyang Zhang",
      "Jiaxu Xing",
      "Moritz Reuss",
      "Quanquan Peng",
      "Junsong Chen",
      "Enze Xie",
      "Zhijian Liu",
      "Song Han"
    ],
    "abstract": "World action models (WAMs) leverage the world knowledge of video generation models to improve action generation by aligning visual prediction with action prediction. However, their prediction overhead prevents real-time deployment on edge devices, and they usually lack an effective long-term memory. We introduce SANA-Robot, a 4.5B WAM with minute-level memory that runs in real time on edge devices, built on the following core designs: (1) hybrid memory at constant cost: our WAM relies on linear attention to maintain a global memory with a fixed-size state, and on sliding window softmax attention layers that propagate previous information, enabling high success rates on tasks requiring whole-episode memory while keeping an efficient and constant inference speed; (2) a unified model: by dynamically applying different noise levels to action and video tokens, SANA-Robot can serve not only as a policy but also as a world simulator; (3) a full-stack infrastructure for both memory training and inference, including efficient data packing and shuffling as well as memory-phase-based asynchronous execution. SANA-Robot achieves the best performance on the memory dimension of RoboDojo among models of medium size (about 5B) and the highest success rates on LIBERO-Plus, LIBERO-Pro and LIBERO-Max. In real-world deployment, SANA-Robot takes 135 ms per action chunk on an RTX 5090 with FP8 GEMMs and 115 ms with NVFP4 GEMMs, and achieves closed-loop, real-time asynchronous robot control at 30 Hz on edge devices, demonstrating both the efficiency and the effectiveness of SANA-Robot. Project page: https://nvlabs.github.io/Sana/Robot/",
    "published": "2026-11-21T17:23:39Z",
    "updated": "2026-11-21T17:23:39Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28943"
  },
  {
    "id": "2611.28942",
    "title": "XShot: Cross-Shot Video Object Insertion from a Reference Video",
    "authors": [
      "Bangxun Tang",
      "Chen Chen"
    ],
    "abstract": "We present XShot, a framework for cross-shot video object insertion, which adds objects to a shot by watching another shot of the same scene. Video productions show a scene through many shots, and objects added to one shot must appear consistently in the others. Most video editors take the appearance of new objects from reference images and their location from a text prompt, a mask or an edited keyframe, leaving this consistency to the user. XShot reads both from a reference video of another shot, which need not be aligned with the target, and needs no mask, box or camera pose. We build on a video Diffusion Transformer and formulate the task as in-context generation over the reference video, a few images of the objects and the target video. A geometry-aware cross-shot attention estimates the epipolar geometry between the two shots from the model's own correspondences and uses it to guide where the target reads the reference and the exemplars. We train XShot with an erase-and-restore data engine: objects are erased from one shot of a film or a multi-camera recording and restored from another shot of the scene. Experiments show that XShot places objects more accurately and renders them more faithfully than open-source and commercial video editors, while leaving the rest of the shot intact.",
    "published": "2026-11-21T17:22:56Z",
    "updated": "2026-11-21T17:22:56Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28942"
  },
  {
    "id": "2611.28940",
    "title": "When Rubrics Do Not Decide: Silent Value Completion in LLM Evaluation",
    "authors": [
      "Zhuangzhuang Pan",
      "Yan Xia",
      "Kaiwen Lei",
      "Chee Seng Chan"
    ],
    "abstract": "Multi-criterion LLM judges often evaluate responses without specifying how conflicting criteria resolve, leaving the winner undetermined even under exact criterion scores. Issuing a strict verdict without declaring the required trade-off premise constitutes silent value completion. We introduce TradeoffBench to isolate this failure by separating rule execution from response scoring. On authoritative criterion vectors, six open-weight non-reasoning judges pass all dominance and equality controls yet pick unsupported winners on 9%-81% of 1,345 conflicts. All 577 order-stable choices follow an explicitly banned majority rule. Reasoning-enabled configurations drop anonymous-vector violations to 2 in 9,720 judgments under an explicit rule, yet cannot bridge omitted trade-offs or divergent component scoring. On raw TradeoffBench text with unspecified trade-offs, GPT-6.1-sol omits its completion premise in 29.8% of 400 verified conflicts. Even under an explicit rule on four-rater-consensus MultiPref conflicts, four reasoning judges still issue strict verdicts on 16/45 (GPT-6.1-sol) up to 35/46 and 25/29 (open-weight judges) of valid presentations. We propose identified-first evaluation, decoupling specification support, explicit completion, and target agreement. In MultiPref human-score audits, peer-mean substitution raises directional disagreement from 0.6% to 28.8% on 2,707 shared targets. A single-peer ablation confirms a 29.38-point gap on 2,175 targets, ruling out averaging as the cause. In HUMAINE, declared partial trade-offs add 2.5 percentage points of coverage, yet newly decided pairs incur 3.9% disagreement versus 0.9% for Pareto. Reliable LLM judging, therefore, requires auditing, specification support, declared trade-offs, and human target agreement separately.",
    "published": "2026-11-21T17:18:03Z",
    "updated": "2026-11-21T17:18:03Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.28940"
  },
  {
    "id": "2611.28935",
    "title": "STEdgeFormer: MCU and NPU Deployable Transformer Architecture",
    "authors": [
      "Sudhakar Sah"
    ],
    "abstract": "Transformer-based sequence models have achieved strong performance in language and time-series modeling, but self-attention remains computationally and memory intensive for deployment on resource-constrained edge accelerators. We propose STEdgeFormer, a lightweight, hardware-aware sequence architecture designed for efficient execution on embedded neural accelerators. STEdgeFormer combines polynomial mixture layers and DyT normalization with an accelerator-aware causal memory block, replacing pairwise self-attention with compact causal aggregation. On TinyStories, the fully NPU-supported STEdgeFormer (MW) achieves a perplexity of 7.39 with 4.12M parameters and 6.51 MB RAM, with an end-to-end latency of 40 ms. In comparison, the standard 4.12M-parameter configuration achieves a lower perplexity of 6.79 but requires CPU fallback for unsupported operators, resulting in 1450 ms latency. Vanilla Transformer, on the other hand, achieves a perplexity score of 5.71 using a 4.40M-parameter model, but it cannot be deployed on the hardware. On downstream tasks, STEdgeFormer achieves 94% accuracy on ECG5000 and 93% accuracy on Speech Commands with 1.39M parameters. These results demonstrate that hardware-aware architectural choices and operator compatibility can have a substantial impact on practical inference latency, beyond model size and task accuracy alone. Rather than targeting state-of-the-art accuracy on individual benchmarks, STEdgeFormer is designed to provide a deployable sequence modeling architecture under the memory, computational, and operator constraints of embedded neural accelerators.",
    "published": "2026-11-21T17:09:05Z",
    "updated": "2026-11-21T17:09:05Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.28935"
  },
  {
    "id": "2611.28929",
    "title": "Definition-Guided In-Context Learning for Zero-Shot Spoken Language Understanding",
    "authors": [
      "Neeraj Agrawala",
      "Sriram Ganapathy"
    ],
    "abstract": "Adapting spoken language understanding (SLU) systems to novel or revised label taxonomies conventionally requires additional labeled data and retraining, creating a bottleneck for real world deployment. While in-context learning with few-shot demonstrations offers an alternative, multi-modal generalization and scaling has been challenging. In this work, we investigate whether natural-language definitions alone can guide zero-shot SLU without demonstration exemplars, finding that symbolic definitions serve as the primary supervisory driver for adapting speech-text models. We operationalize this principle as Definition-Guided In-Context Learning (DG-ICL), a fine-tuning framework that decouples semantic categories from fixed lexical names. By replacing labels with dynamically randomized definitions (arbitrary synthetic tokens in DG-ICL-Sym or permuted vocabulary words in DG-ICL-Flip), DG-ICL avoids lexical shortcuts and encourages the model to ground acoustic representations in contextual definitions. Novel categories can thus be introduced at inference simply by defining them through the instructions. Across three speech-text models (AUDIO FLAMINGO 3, QWEN2-AUDIO, and SALMONN), DG-ICL outperforms standard instruction tuning on held-out tasks under novel symbols (0.663 vs. 0.449 macro-F1 on Audio Flamingo 3; 0.703 vs. 0.620 on Qwen2-Audio; 0.582 vs. 0.399 on SALMONN), while remaining competitive on original labels. Furthermore, counterfactual evaluations demonstrate instruction following abilities, where it is shown that DG-ICL-Sym retains 68% of its performance when definitions contradict pre-trained lexical priors, whereas standard instruction tuning elicits significantly reduced retention of 21%. Finally, we show that DG-ICL enables zero-shot speech clustering into user-defined categories specified on the fly",
    "published": "2026-11-21T17:03:52Z",
    "updated": "2026-11-21T17:03:52Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.28929"
  },
  {
    "id": "2611.28924",
    "title": "OmniDecisionBench: Evaluating and Benchmarking the Multimodal Jev-Style System One Decision Models",
    "authors": [
      "Tianxiang Gao",
      "Jinzhe Li",
      "Yue Zhou",
      "Dandan Guo",
      "Qi Wang",
      "Diana Inkpen",
      "Yuan Wu",
      "Yi Chang"
    ],
    "abstract": "Multimodal System One models answer visual tasks with typed decisions and native probabilities, yet no holistic evaluation compares them with general VLMs or maps either class's capability boundaries. We introduce OmniDecisionBench, a holistic benchmark of multimodal System One models. Its main evaluation assigns 45 datasets (192,975 records) to five capability families and twelve primary angles across four typed interfaces, scoring accuracy and candidate-probability calibration. A validation layer adds three single-factor diagnostics varying visual presentation, textual evidence sufficiency, and target dataset. Across three System One models and two general VLMs, three regularities emerge. First, strengths depend on angle and metric: System One models lead discrete tasks overall with lower ECE15 on most perception, reading, and reasoning angles (Jev 1.14: 80.14% accuracy, 4.50% ECE15), while general VLMs lead ordinal grading and outperform Jev 1.14 among the three models tested on direct Box grounding. Second, multi-image and abstract reasoning bound every model, where confidence rather than accuracy separates them. Third, reliability shifts with the input: rendering only options nearly triples Jev 1.14's selective risk at nearly flat mean signed bias, and donor risk cutoffs often exceed target risk across unseen datasets and task families. OmniDecisionBench thus maps which model class suits each angle and where reliability ends. The code and dataset will be available at https://github.com/Glax147/OmniDecisionBench.",
    "published": "2026-11-21T16:54:21Z",
    "updated": "2026-11-21T16:54:21Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.28924"
  },
  {
    "id": "2611.28922",
    "title": "PIAE: Physics-Informed Continuous Autoencoding for Compact 3D Human Motion",
    "authors": [
      "Osama Alshammari",
      "Omar Mohammed",
      "Kerven Durdymyradov",
      "Naeemullah Khan"
    ],
    "abstract": "Temporal compression reduces the sequence length that motion generators must model, but can damage articulated detail and global trajectory. These errors have unequal consequences: root-velocity and heading errors propagate through trajectory recovery and affect the placement of the entire body. We propose PIAE, a physics-informed continuous autoencoder that allocates a fixed token budget between explicitly retained kinematic signals and complementary learned features. At 8 x temporal compression, each 256-dimensional token contains 224 learned values and a 32-dimensional physical carrier. The complete token conditions neural decoding, while a parallel recovery path constrains selected outputs. On the official HumanML3D benchmark, PIAE achieves 8.936 mm global MPJPE, an 82.0% reduction relative to a same-width learned-only model. The benefit extends beyond trajectory restoration: facing-local neural-body error before analytical correction decreases by 76.6% in a frozen-checkpoint validation diagnostic, and supplying the same true trajectory to both models preserves the body-quality advantage. Targeted root-only and explicit-root hybrid controls establish strong trajectory-aware comparisons; alternative carriers reveal that torso references favor position accuracy, whereas stance anchors favor support quality. With the original 8 x AEs frozen, matched text-to-motion generators predict every carrier value and improve FID from 0.506 to 0.163. Frozen reconstruction also transfers to AIST++ without adaptation. The compressed carrier interface reduces measured generation time by 27.8% relative to its 1 x counterpart. Together, these findings demonstrate that selective preservation can use a fixed representation budget more effectively, improving neural articulated reconstruction and downstream generation in compact human motion.",
    "published": "2026-11-21T16:52:57Z",
    "updated": "2026-11-21T16:52:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28922"
  },
  {
    "id": "2611.28919",
    "title": "When Do Better Visual World Models Make Better Plans? Decision-Aligned Selection for Latent Planning",
    "authors": [
      "Chan Aristella Lu",
      "Arya Fayyazi",
      "Junil Yeo",
      "Jin Lu",
      "Kyu Hyung Lee",
      "Mehdi Kamal",
      "Massoud Pedram"
    ],
    "abstract": "Visual world models enable goal-conditioned planning by predicting the outcomes of candidate actions in latent space. However, planning depends on how well a model ranks candidates, whereas training optimizes how accurately it predicts each one. We identify the Decision-Relevant Residual (DRR), the part of the cost error that can reorder candidates, and show that the more training reduces the DRR, the more it improves selection (Spearman $ρ= 0.82$, vs. $0.61$ for prediction error). Building on this insight, we introduce Decision-Aligned Selection (DAS), a plug-in selection rule that scores candidates by the standardized consensus of several independently trained checkpoints, which averages out their checkpoint-specific residuals. Across two model families (LeWorldModel and DINO-WM) and five tasks, DAS selects better actions than single checkpoints in 12 of 18 configurations and outperforms training one model three times longer in 14 of 18. In closed loop, DAS improves success over single checkpoints in 6 of 9 pre-registered LeWM comparisons.",
    "published": "2026-11-21T16:51:29Z",
    "updated": "2026-11-21T16:51:29Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.28919"
  },
  {
    "id": "2611.28917",
    "title": "Div3DAfford: Diverse 3D affordance grounding",
    "authors": [
      "Haomeng Zhang",
      "Raymond A. Yeh"
    ],
    "abstract": "3D affordance grounding aims to localize 3D regions specified by an interaction query. Existing methods predict a single affordance mask, overlooking the inherent diversity of human-object interactions. We introduce diverse 3D affordance grounding, a new task that requires predicting multiple plausible regions for a given object and affordance query. We then propose Div3DAffordNet, a transformer-based set prediction model capable of generating diverse affordance regions. To address the scarcity of diverse 3D affordance data, we develop an automated pipeline leveraging 2D generative models and 3D reconstruction techniques to synthesize 3D affordances, followed by lightweight human verification (reducing the annotation time by 72X), yielding the Div3DAfford benchmark. Extensive experiments show Div3DAffordNet effectively captures multi-mask affordance regions. Our method achieves the SOTA affordance grounding performance in the multi-mask setting, reducing GED-SIM from 0.745 to 0.492, while maintaining competitive single-mask performance on the standard benchmark of 19.0 mIoU.",
    "published": "2026-11-21T16:46:02Z",
    "updated": "2026-11-21T16:46:02Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2611.28917"
  },
  {
    "id": "2611.28883",
    "title": "Health Ikigai: Semantic Conversational Interfaces for Wearable Health Data to Support Behavioral Change for Senior Indian",
    "authors": [
      "Md Haseen Akhtar",
      "Hansoo Lee",
      "Rafael A. Calvo"
    ],
    "abstract": "In ubiquitous health contexts, wearable feedback is often encountered in brief, interrupted moments of everyday life. However, many wearable and mobile health systems still present personal health data through numerical dashboards, leaving users and health coaches to interpret trends, thresholds, and deviations on their own. This interpretive burden may be especially relevant for adults aged 50-65 in India, where digital literacy, health literacy, language, and daily routines can shape how health technologies are understood and used. We present Health Ikigai, a design-oriented proof-of-concept framework that reframes wearable activity feedback from dashboard-based numerical interpretation to semantic conversational feedback. The prototype transforms replayed wearable-derived activity data into baseline-aware triggers, plain-language feedback, limited-turn conversational prompts, and coach-facing review summaries. A preliminary formative evaluation with ten adults in India suggests that participants perceived the interaction as understandable, lightweight, supportive, and actionable. We discuss design implications for low-burden wearable health interfaces that preserve coach oversight while reducing users' interpretive work.",
    "published": "2026-11-21T15:59:43Z",
    "updated": "2026-11-21T15:59:43Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.28883"
  },
  {
    "id": "2611.28881",
    "title": "FormaFin: Verifiable Financial Analysis with Solver-Guided Reinforcement Learning",
    "authors": [
      "Bethel Hall",
      "William Eiers"
    ],
    "abstract": "Formally verifying financial analyses generated by large language models (LLMs) remains challenging as financial rules are largely expressed in natural language and rarely have corresponding formal specifications. Training language models to formalize these rules is hindered by the scarcity of labeled data and reliable training signals, while confidential financial data favor small models that run locally. We introduce FormaFin, a framework that trains small open language models to translate financial rules into reusable SMT formulas. FormaFin integrates teacher distillation with reinforcement learning using an SMT solver to compute rewards from numerical thresholds stated in financial rules. We evaluate FormaFin on corporate loan monitoring, in which lenders check borrowers' financial figures against loan agreements. To evaluate our framework, we curate \\bench{}, a benchmark containing 143 loan agreements and 2,527 questions covering compliance, earnings cushion, and debt capacity. Our results show that a 7B formalizer achieves 94.8\\% accuracy, outperforming open LLMs up to ten times larger. Across three model families, accuracy ranges from 92.6 to 96.8\\%. Our framework also detects 95.6 to 99.7\\% of errors in other LLMs' financial analyses. We make FormaFin and \\bench{} publicly available.",
    "published": "2026-11-21T15:56:56Z",
    "updated": "2026-11-21T15:56:56Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.28881"
  },
  {
    "id": "2611.28878",
    "title": "Eidetic Code World Model",
    "authors": [
      "Wenqing Tian",
      "Zijian Zhang",
      "Qiang Liu",
      "Liang Wang"
    ],
    "abstract": "Executable code can preserve a world's structural layout, yet video renderers frequently alter the appearance of previously visited places once they leave the camera view. We present Paintress, a code-conditioned world model that couples an executable geometric proxy with an independently parameterized 3D Gaussian appearance memory in a shared metric coordinate frame. While the proxy enforces structural and visibility constraints, 3D Gaussians capture the visual realization synthesized by emitted observations. To balance stable incremental fusion with consistent readout, Paintress separates writing from reading: newly emitted frames update a persistent raw Gaussian map under confidence-gated selection, whereas a cloned reader copy is globally refined against the observation archive and rendered with coverage masks to condition generation. We also introduce Expedition-33, a benchmark for generated-appearance retention across 11 static scenes, five route families, and 15, 30, and 60 s target absences (165 settings per system). Excluded from the opening image, targets are synthesized during a shared prefix and scored against each system's own first visit at matched return cameras. Across ten systems (1,650 videos), Paintress achieves 0.1220 ROI-LPIPS, 0.0613 MAE, and 52.12% detail retention (vs. 0.2731, 0.1401, and 10.91% for CWM), with lower discrepancy at 60 s (0.1630) than CWM, AgentGarten, and Lyra 2.0 achieve at 15 s.",
    "published": "2026-11-21T15:51:16Z",
    "updated": "2026-11-21T15:51:16Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28878"
  },
  {
    "id": "2611.28873",
    "title": "NAT: Scaling Causal Neural Action Tokenizers Across Embodiments",
    "authors": [
      "Ahad Jawaid",
      "Alexander Swerdlow",
      "Yu Xiang"
    ],
    "abstract": "Action tokenizers let robot policies treat control as autoregressive next-token prediction. As these policies are trained on larger and more diverse datasets, they will need a universal tokenizer that can encode actions from many embodiments and data sources, including ones it has not seen. We study action tokenization at scale, training on 49k hours of action data from real-world robots, handheld grippers, simulation, and humans. We introduce Neural Action Tokenizer (NAT), a causal tokenizer whose decoder lets actions be executed as their tokens are generated. Across four simulation benchmarks, NAT outperforms FAST and prior neural action tokenizers when tokenizing unseen robot embodiments, and in vision-language-action models it outperforms FAST+ across four benchmarks and on a real robot when acting through its tokens. NAT tokens also close the performance gap to a flow-matching action head on some benchmarks while lowering the inference latency for first actions. Our experiments also find that robot data may not be necessary to learn an effective action space: a NAT trained only on human hand motion performs close to tokenizers trained on robot data.",
    "published": "2026-11-21T15:43:07Z",
    "updated": "2026-11-21T15:43:07Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.28873"
  },
  {
    "id": "2611.28872",
    "title": "SENSA: Visual-to-Brain Generation with Individualized Subject-State Transfer and Adaptation",
    "authors": [
      "Yihang Zou",
      "Chunmei Qing",
      "Ruixi Liang",
      "Haichuan Wei",
      "Junpeng Tan",
      "Qifan Yang",
      "Wanxiang Luo",
      "Haodong Li",
      "Xiangmin Xu",
      "Yefeng Zheng"
    ],
    "abstract": "Visual-to-brain encoding predicts neural responses to visual stimuli, supporting visual cognition research and neural decoding. However, challenges in disentangling shared from image-specific activity, together with inter-subject distribution shifts and representational heterogeneity, limit accurate encoding and cross-subject generalization with limited calibration data. We introduce SENSA, a structured continuous neural response generation framework that separates shared activity from image-dependent responses and calibrates a compact subject state. An independent response prior captures shared activity, while complementary visual descriptors drive separable sensor-time bases and a shared Response Refiner. Subject-Adaptive Factor Transport adjusts the spatiotemporal expression of shared bases, while Source-Grounded Residual Memory predicts image-dependent corrections in source-response coordinates. Together, they personalize a frozen generator using limited paired support. Experiments demonstrate that the generation backbone outperforms recent generators across three datasets, with image-identity perturbations confirming stimulus specificity. Using only 400 paired images, electroencephalography (EEG) and the Natural Scenes Dataset (NSD) calibration achieve residual Pearson correlations of 0.1091 and 0.2995, respectively, demonstrating effective brain-response generation and cross-subject adaptation.",
    "published": "2026-11-21T15:41:45Z",
    "updated": "2026-11-21T15:41:45Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28872"
  },
  {
    "id": "2611.28871",
    "title": "KineState-SWAM: A Surgical World Action Model with Explicit Kinematics and Causal Interaction Dynamics",
    "authors": [
      "Rulin Zhou",
      "Yujie Ma",
      "Rui Tang",
      "Qiujie Song",
      "Wanhao Liu",
      "Guoheng Ma",
      "Liangjing Shao",
      "An Wang",
      "Hongliang Ren"
    ],
    "abstract": "Existing surgical world models often leave implicit how instrument motion drives localized tissue responses and how interaction history informs subsequent actions. We introduce KineState-SWAM, a surgical world-action model coupling action prediction and video generation through a persistent interaction state, separating kinematically determined instrument motion from learned scene evolution. A flow-matching policy predicts joint trajectories conditioned on interaction state, robot configuration, and task instruction. Kinematic Geometry Conditioning converts these trajectories into surface-motion tokens and spatially aligned instrument renderings using calibrated URDF kinematics. Causal Interaction Dynamics recurrently updates the state through geometry-guided attention and motion-aligned feature transport, carrying interaction history into subsequent action predictions without intermediate video synthesis. The State-Geometry Adapter combines state-dependent spatial modulation with localized geometric residuals to guide video generation. Interaction-aware supervision emphasizes tissue responses near instrument working regions. We introduce dVRK-Chole5.2k, comprising 5,255 videos spanning 17 surgical tasks. Experiments demonstrate improved action accuracy and video fidelity over evaluated baselines within matched action-conditioning settings. Ablations support preserving and transporting interaction states for long-horizon prediction.",
    "published": "2026-11-21T15:38:18Z",
    "updated": "2026-11-21T15:38:18Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.28871"
  },
  {
    "id": "2611.28870",
    "title": "Postpartum Sense-Making and AI in a Fragmented Care System",
    "authors": [
      "Diana Freed",
      "Maja Mishevska"
    ],
    "abstract": "Postpartum women must navigate health information across a fragmented landscape of clinicians, peers, online communities, influencers, and, increasingly, large language models (LLMs). Existing evaluations of LLMs in health contexts primarily ask whether systems provide accurate, safe, and readable information. We argue that these criteria, while essential, are insufficient for understanding how LLMs may affect postpartum care. LLMs enter an information ecology in which women are already required to reconcile competing forms of expertise, determine whether their experiences are normal or concerning, and decide when and where to seek care. At the same time, online representations of motherhood and femininity shape which postpartum experiences are made visible and what forms of self-management are expected of women. Drawing together research on postpartum care gaps, online help-seeking, influencer cultures, gendered responsibility, and AI-supported health information, we position LLMs as emerging intermediaries within this broader care infrastructure. We argue that evaluating postpartum AI requires examining not only information quality, but also how these systems shape epistemic coordination, transitions to formal care, and the distribution of responsibility for making fragmented systems of care work.",
    "published": "2026-11-21T15:37:19Z",
    "updated": "2026-11-21T15:37:19Z",
    "categories": [
      "cs.HC",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2611.28870"
  },
  {
    "id": "2611.28861",
    "title": "\"I feel like AI is just everywhere\": A longitudinal qualitative study on parents' perceptions, use, and mediation of GenAI",
    "authors": [
      "Jennica Li",
      "Shirley Zhang",
      "Dakota Sullivan",
      "Bilge Mutlu",
      "Heather Kirkorian",
      "Kassem Fawaz"
    ],
    "abstract": "GenAI has developed rapidly over the last few years, yet few longitudinal studies exploring how individuals' experiences with GenAI have changed over time exist. Even fewer studies have focused on families with children, despite the opportunity to explore how parents have balanced their needs, their children's development, and the fast pace in which technology changes. To better understand how parents' perceptions, use, and mediation of GenAI shifted over two years, we interviewed 10 parents who had participated in a prior study about their families' experiences with GenAI. Parents had shifted from thinking GenAI was novel to feeling like it was unavoidable, characterizing GenAI as a limited tool to believing GenAI development needed to be regulated, and focusing on their personal mediation strategies to wanting systemic plans to curb GenAI's long-term consequences. We position our findings within the context of parental mediation of technology and increasing collective mitigation of GenAI-related risks.",
    "published": "2026-11-21T15:21:01Z",
    "updated": "2026-11-21T15:21:01Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.28861"
  },
  {
    "id": "2611.28853",
    "title": "CivilCADBench: Benchmarking Multimodal LLMs for Understanding, Reconstructing, and Designing Civil Engineering Drawing Sets",
    "authors": [
      "Zelin Zheng",
      "Difei Wu",
      "Xinyan Liu",
      "Minghong Chen",
      "Antoni B. Chan",
      "Difan Zou"
    ],
    "abstract": "Civil infrastructure is designed, built, and maintained through engineering drawing sets, yet preparing and revising them remains labour-intensive and calls for automation. Multimodal large language models (MLLMs) are promising candidates, but assessing them requires a benchmark grounded in real engineering practice. We introduce CivilCADBench, a benchmark for understanding, reconstructing, and designing civil engineering drawing sets, built from real infrastructure drawings and source CAD files containing over 250,000 CAD entities. Unlike parametric 3D CAD models, these drawings are dense, layered, and multi-sheet; and since prints are lossy projections with no pixel trace of layers, a file can print correctly yet remain wrongly organised. CivilCADBench comprises three task families of increasing difficulty: understanding tasks are evaluated with 2,183 expert-reviewed questions ranging from single sheets to whole sets, while reconstruction and design tasks are agentic, requiring models to rebuild printed pages as editable CAD files, either as single pages or entire drawing sets, and to produce new designs. These tasks are performed across 232 pages, 28 sets, and 19 design tasks, and evaluated by a deterministic scorer that compares model outputs with the designers' source files on geometry, layers, text, and dimensions. We evaluate seven frontier MLLMs on CivilCADBench, and find that they read and redraw printed content accurately but recover the file structure poorly: the best model scores above 90% in understanding and single-page reconstruction, yet only 60% on layer assignment and 48% on design. Grounded in real engineering practice, CivilCADBench exposes both the capabilities and the limitations of frontier models in professional civil engineering, laying a foundation for next-generation models and agentic systems for intelligent civil engineering.",
    "published": "2026-11-21T15:08:36Z",
    "updated": "2026-11-21T15:08:36Z",
    "categories": [
      "cs.CV",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.28853"
  },
  {
    "id": "2611.28850",
    "title": "MQCODet: Modality Quality-Guided Collaborative Optimization for UAV-Based RGB-T Tiny Pedestrian Detection",
    "authors": [
      "Hui Li",
      "Jianbo Ma",
      "Hui Luo",
      "Guanglin Qi",
      "Zhixing Wang",
      "Haorui Zuo",
      "Jianlin Zhang"
    ],
    "abstract": "Unmanned aerial vehicle (UAV)-based RGB-thermal (RGB-T) remote sensing provides complementary visual and thermal information for pedestrian perception under complex aerial observation conditions. However, detecting tiny pedestrians in UAV-based RGB-T imagery remains challenging due to cross-modal spatial heterogeneity, manifested as modality quality imbalance and spatial position misalignment. Existing RGB-T detectors primarily address these challenges at the feature fusion stage, without establishing an effective coupling between feature fusion and object localization, potentially resulting in suboptimal detection performance. To address this limitation, we introduce a Modality Quality-Guided Collaborative Optimization Detector (MQCODet), which extends modality quality from a fusion prior to a localization supervision cue. Specifically, we propose a Dynamic Calibration and Region-Aware Fusion (DCRF) module that progressively refines cross-modal spatial alignment and performs region-aware fusion to generate reliable multi-scale features and a scene-level modality quality prior. We further design an Efficient Contextual Interaction (ECI) encoder to enhance multi-scale feature interaction while preserving fine-grained spatial details. Moreover, we propose a Modality-Aware Adaptive (MAA) loss that incorporates the modality prior and object scale to adaptively balance spatial consistency and geometric similarity for localization supervision. Extensive experiments demonstrate that MQCODet surpasses state-of-the-art methods on two UAV-based RGB-T tiny pedestrian detection benchmarks while achieving real-time inference on the edge platform.",
    "published": "2026-11-21T15:03:50Z",
    "updated": "2026-11-21T15:03:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28850"
  },
  {
    "id": "2611.28849",
    "title": "Guarding with Judgment: Learning to Intervene for Multimodal Safety",
    "authors": [
      "Jipei He",
      "Cheng Cheng",
      "Liuguo Wang",
      "Zihan Wen",
      "Changlin Yu",
      "Wentao Song",
      "Suyun Zhao"
    ],
    "abstract": "When visual context makes an ordinary request unsafe to answer as asked, a blanket refusal may leave the user's need unresolved. Choosing how to help requires distinguishing an established hazard from a condition that still needs verification, a distinction that binary safety labels leave unspecified. We formulate this decision through four actions: allow, warn, review, and refuse. To ground these decisions in verifiable evidence, we build a corpus of 20,126 training audits and the JudiBench benchmark, connecting each action to diagnostic judgments, source evidence, and controlled context changes. Our guard, JudiAct, separately states what the source establishes, what condition governs the help, and how the rules apply. It then checks these three brief review items against the original inputs to predict diagnostic labels and a handling action. Supervised training learns individual judgments while comparing label assignments across related cases. A second stage swaps one review item at a time, using the resulting audit feedback to refine review generation. On JudiBench, JudiAct improves request and answer Macro-F1 by more than 28 percentage points over its 4B backbone. Across nine public benchmarks, it outperforms state-of-the-art guards on the mean delivered-answer score in both pre-generation and post-generation settings, cutting MM-SafetyBench attack success from 40.78% to 25.30%.",
    "published": "2026-11-21T15:02:04Z",
    "updated": "2026-11-21T15:02:04Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.28849"
  },
  {
    "id": "2611.28711",
    "title": "When Local Semantics Disagree: Learning to Detect Fake News through Weakly Supervised Cross-Modal Reasoning",
    "authors": [
      "Zeheng Wang",
      "Hao Zhang",
      "Yige Wang",
      "Xi Xiao",
      "Hao Xu"
    ],
    "abstract": "The rapid proliferation of multimodal social media content has made fake news detection a pressing challenge for the vision-language community. Most existing approaches rely on coarse global similarity between text and images, which overlooks subtle, uneven cross-modal inconsistencies -- such as sentiment-scene mismatches, object-level manipulations, or semantic dissonance between visual and textual cues. Moreover, these models treat all inconsistencies as equally informative, ignoring domain-specific variation in how such conflicts manifest, which limits both generalization and interpretability. To address these challenges, we propose DMIL, a dual-branch multiple instance learning framework that formulates multimodal fake news detection as a weakly supervised learning problem. Each news article is treated as a bag of visual and textual instances processed through two complementary branches: an embedding-space branch that aggregates global semantics via expert-guided modality fusion, and an instance-space branch that models cross-modal inconsistencies across local-to-global granularities. A retrieval-augmented, domain-adaptive router further contextualizes inconsistencies using retrieved domain exemplars and dynamically fuses multi-level cues. Extensive experiments on public misinformation benchmarks demonstrate that DMIL achieves competitive state-of-the-art performance and demonstrates strong discriminative capability against fake news across different domains.",
    "published": "2026-11-21T10:13:29Z",
    "updated": "2026-11-21T10:13:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28711"
  },
  {
    "id": "2611.27547",
    "title": "GameScrub: Learning HUD Removal from Real Gameplay with Recovered Targets",
    "authors": [
      "Mohammad Areeb Qazi",
      "Yiyan Hu",
      "Yanan Wang",
      "Xuezhi Liang",
      "Xin Li",
      "Fan Yang",
      "Xin Gao",
      "Guangyi Liu"
    ],
    "abstract": "Gameplay videos are a rich source of experience for learning virtual-world dynamics, yet their frames contain heads-up displays (HUDs) that follow interface rules rather than scene dynamics. Removing HUDs would make this footage directly usable for learning world dynamics. However, training a removal model requires paired clips with and without HUDs, whereas real recordings contain only HUD-overlaid footage. Existing work synthesizes pairs by compositing HUD graphics onto HUD-free footage, requiring a separately curated clean corpus and producing HUDs that only approximate real ones. Models trained on such pairs leave 40 to 50% of real HUD elements untouched. We instead recover pseudo-clean targets directly from real recordings by inpainting HUD regions with a pretrained video diffusion model. Preventing HUD traces from leaking into recovered targets is challenging because latent video autoencoders mix information across mask boundaries. Our training-free recovery pipeline, GameScrub-Data, pre-fills HUD regions with flow-guided background estimates before encoding, excludes HUDs from scene conditioning, and confines restoration to masked regions through pixel-space compositing. The resulting pairs train GameScrub, a video diffusion removal model that handles diverse HUDs without inference-time masks or clean reference images. On the in-the-wild Game2World benchmark, GameScrub achieves an artifact-adjusted removal score of 71.95, compared with 57.86 for the strongest reference-free GameCleaner configuration, and removes 90.06% of annotated HUD elements versus 59.07%. These results demonstrate that real recordings with recovered targets can support effective HUD removal, advancing HUD-free gameplay data for world models and controllable video generation.",
    "published": "2026-11-20T12:45:33Z",
    "updated": "2026-11-20T12:45:33Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.27547"
  },
  {
    "id": "2611.27543",
    "title": "On the Limits of Observability for Evaluating Coverage in Machine Unlearning",
    "authors": [
      "Ziluowen Luo",
      "Jun Yin",
      "Songyang Liu",
      "Ji Qi",
      "Chuang Hu",
      "Kyrie You Wu",
      "Chaozhuo Li",
      "Senzhang Wang"
    ],
    "abstract": "Machine unlearning aims to remove the influence of any requested subset of training data while preserving utility on the remaining data. Empirical evaluations measure predictive accuracy and infer training-set membership (MIAs) from model outputs or intermediate activations. However, by focusing on selected forget sets, these evaluations can overlook Coverage, the range of requests a method can fulfill. To assess this coverage, we first conduct a stress test of observability with 502 retrained models, finding that hidden embeddings reveal known deletions missed in predictions. To characterize capacity limits on coverage, we show that distinguishing all $n$ singleton deletions with linear scores can require a shared representation of rank $Ω(\\log n)$. We further extend the bound to arbitrary subsets and show when partial deletion can appear complete. Building on this analysis, we propose CEO, a framework for evaluating unlearning coverage under limited observability. Its compositional color-shape benchmark makes forgetting and retained utility measurable from the full output distribution and provides a leave-one-out retraining oracle for each target. From a fixed number of oracle observables, we estimate empirical target coverage, the fraction of targets reliably flagged when deleted and rarely flagged under any other deletions. To recover missed deletions, CEO further expands each observable representation into high-dimensional activation space with the frozen encoder of a SAE trained on the original model. Extensive experiments of 20 baselines shows that even on this simple synthetic task, only retraining from scratch covers all deletion targets.",
    "published": "2026-11-20T12:38:56Z",
    "updated": "2026-11-20T12:38:56Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.27543"
  },
  {
    "id": "2611.27542",
    "title": "When Visually Rich Documents Meet Multi-Vector Retrieval for Region-level Retrieval-Augmented Generation",
    "authors": [
      "Xu Yuan",
      "Liangbo Ning",
      "Yujuan Ding",
      "Qing Li",
      "Wenqi Fan"
    ],
    "abstract": "Visually rich documents (VRDs) convey knowledge through textual, visual, and layout information that text-centric Retrieval-Augmented Generation (Text-RAG) struggles to fully exploit. Recent Vision-RAG approaches enable retrieval and generation directly from document images, retaining this multimodal information. However, earlier Vision-RAG methods commonly adopt coarse retrieval representations and full-page visual contexts, which can obscure local evidence and introduce substantial redundancy and computational overhead. To address these challenges, we propose MV-VisRAG, a region-level Vision-RAG framework that uses semantically complete regions for both document representation and visual augmentation. Specifically, MV-VisRAG first constructs these regions through a ContentAdaptive Regionalization module. It then encodes them into local region vectors and a page-level global vector using a VLM-based retriever trained through multimodal reconstruction pretraining and retrieval fine-tuning. With this compact multi-vector representation, MV-VisRAG performs late-interaction retrieval and estimates region contributions from the resulting matching scores. These contributions guide the selection of relevant regions, which are then rearranged into a compact visual context for generation. Experiments across five benchmarks demonstrate retrieval and generation gains over corresponding baselines, while region-level augmentation substantially reduces visual tokens and computational cost. Our code will be made publicly available at https://github.com/xandery-geek/MV-VisRAG.",
    "published": "2026-11-20T12:38:38Z",
    "updated": "2026-11-20T12:38:38Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.27542"
  },
  {
    "id": "2611.27541",
    "title": "From Tokens to Pixels: Training-Free Guided Upsampling of Frozen CARL Features for Hyperspectral Imaging",
    "authors": [
      "Dominik Fromme",
      "Ellen Markowski",
      "Tim Streckert",
      "Jörg Thiem"
    ],
    "abstract": "Camera-agnostic foundation models such as CARL map spectral images from arbitrary sensors into a shared feature space, but deliver their features only on a token grid at one eighth of the input resolution. The usual bilinear interpolation blurs material boundaries over about one token and rounds off corners. We investigate how much spatial accuracy image-guided upsampling recovers for frozen CARL features without training the encoder or the upsampler. We compare joint bilateral upsampling (JBU), a guided filter and the pretrained AnyUp, each with the hyperspectral image or an RGB rendering as the guide. A hyperspectral ColorChecker dataset acquired specifically for this study, with model-independent reference geometry measured to sub-pixel precision, serves as the evaluation benchmark. JBU with the hyperspectral guide raises the Boundary IoU from 13 to 67 % and reduces the effective edge width of the features from 38 to 4 px, close to the resolution of the raw spectra. The effect occurs in all 24 patches of the ColorChecker and replicates on an additional recording. On placenta and oral cavity images, the feature edges also become markedly qualitatively sharper. For sharp, high-contrast boundaries, JBU is the most accurate and most economical method. On tissue with softer transitions, the pretrained AnyUp yields qualitatively sharper contours. An analysis of 78 simulated band configurations shows that the gain persists in every configuration as long as the head matches the configuration. Image-guided upsampling is thus a simple, training-free step for applications that use CARL frozen with linear heads.",
    "published": "2026-11-20T12:37:51Z",
    "updated": "2026-11-20T12:37:51Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.27541"
  },
  {
    "id": "2611.27533",
    "title": "Standard-Anchored Delegation in Teachers' Use of Generative AI",
    "authors": [
      "Muhammad Saleh Farooq",
      "Muhammad Ahmad Khan",
      "Muhammad Jon Raza"
    ],
    "abstract": "Teachers who use generative AI must decide which parts of their work to hand over, while they remain accountable for what reaches students. We studied these decisions in Punjab, Pakistan, through a qualitatively driven mixed-methods study. We interviewed 13 teachers from government, private, NGO and vocational institutions, four administrators and one student, and coded each teacher's position on twelve educational tasks. Nine teachers accepted AI drafts or substantial assistance with lesson planning, but none accepted AI-drafted learning objectives, and eleven did not use AI to encourage or emotionally support students. Teachers who would accept AI marking required that the model be given a rubric or marking criteria. Building on assessment research and HCI work on verifiability, we call this pattern standard-anchored delegation: teachers handed a component of a task to AI when a standard outside the model, such as a textbook or rubric, defined a correct output and the teacher could apply that standard to the result. Having a standard was not always enough. Several government-school teachers did not use AI to mark quizzes even though the quizzes had answer keys, because they expected students to look for evidence of the teacher's effort. Checking AI output required subject knowledge and time, and private schools gave teachers more support for this than government schools did. Participants also read disclosure of AI use as a statement about whether the teacher had reviewed the work. We propose that teacher-facing AI tools ask for the relevant standard before generating and show each output beside it, and that schools account for the time that checking takes.",
    "published": "2026-11-20T12:29:14Z",
    "updated": "2026-11-20T12:29:14Z",
    "categories": [
      "cs.HC",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2611.27533"
  },
  {
    "id": "2611.27529",
    "title": "Fix Where It Fails: Root-Cause-Guided Agentic Harness Optimization for Scene Graph Generation",
    "authors": [
      "Jee Eun Kim",
      "Donghyeon Choi",
      "Sangjune An",
      "Hae Beom Lee",
      "Kyong Hwan Jin"
    ],
    "abstract": "Scene graph generation (SGG) aims to detect objects in an image and predict the relationships between them. The standard PredCls, SGCls, and SGDet settings show how much performance drops without ground-truth boxes and labels, but not where or why a model fails. Knowing this would allow fixing a model where it fails, without retraining. We propose RoHa-SGG (Root-cause-guided Harness optimization for SGG), which extends agentic harness optimization to SGG. It optimizes the harness, the inference code around a frozen SGG model. RoHa-SGG has two main LLM agents. A root-cause analysis (RCA) agent finds the components where the model fails and diagnoses why, and a proposer agent searches for a harness that fixes these causes. We evaluate RoHa-SGG on Visual Genome and PSG with representative two-stage, one-stage, and multimodal-LLM SGG models. The analysis shows that the components where ground-truth triplets are lost differ across models and datasets. RoHa-SGG improves every metric on all five model-dataset combinations. Graph-constrained R@100 and mR@100 rise by up to 15.8 and 26.4 points for the multimodal LLM and by up to 3.6 and 10.1 points for the two-stage and one-stage models. With root-cause guidance, the harness search reaches the final score of an unguided search up to three times faster.",
    "published": "2026-11-20T12:26:00Z",
    "updated": "2026-11-20T12:26:00Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2611.27529"
  },
  {
    "id": "2611.27521",
    "title": "PaMuk-Bench: A Parallel Multilingual Multitask Benchmark for Vision-Language Tasks",
    "authors": [
      "Silviu-Florin Gheorghe",
      "Radu-Stefan Popa",
      "Adriana Valentina Costache",
      "Adrian-Gabriel Chifu",
      "Alessia Amelio",
      "Paul Irofti",
      "Anders Skaarup Johansen",
      "Lallouani Bouchakour",
      "Mohamed Lichouri",
      "Khaled Lounnas",
      "Neelu Madan",
      "Yashvir Malik",
      "Radu Tudor Ionescu"
    ],
    "abstract": "While vision-language models (VLMs) currently obtain notable results for highly-studied languages, e.g. English, they exhibit significant performance drops in certain low-resource languages, especially due to the lack of annotated datasets. To this end, we propose PaMuk-Bench, a novel parallel multilingual multitask benchmark for vision-language tasks. Our benchmark includes a set of over 10K curated English prompts that are translated into six languages: Arabic, Danish, French, Hindi, Italian, Romanian. Parallel translations, which are obtained via a semi-automatic process, along with accompanying generated and retrieved images enable the comparative development and evaluation of VLMs across a wide range of tasks: text-to-image generation, image captioning, content-based image retrieval, image generation difficulty estimation, image retrieval difficulty estimation. We empirically show that zero-shot English and multilingual pre-trained VLMs compare consistently worse than their fine-tuned counterparts, confirming that PaMuk-Bench is a valuable resource that can drastically reduce the language gap across a variety of VLM architectures and tasks. PaMuk-Bench is available at https://github.com/ghesil/pamuk_bench.",
    "published": "2026-11-20T12:13:25Z",
    "updated": "2026-11-23T10:32:18Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.27521"
  },
  {
    "id": "2611.27517",
    "title": "EchoAlign: Echocardiography foundation model with multilevel report alignment",
    "authors": [
      "Ahmed Aly",
      "Darya Taratynova",
      "Lotfi Abdelkrim Mecharbat",
      "Roman A. Sandler",
      "Joseph Z. Sokol",
      "Joshua Penn",
      "Klaus H. Maier-Hein",
      "Numan Saeed",
      "Mohammad Yaqub"
    ],
    "abstract": "Echocardiography assesses the structure and function of the heart. Cardiologists read each study across several standard views and report the findings visible in those views by cardiac structure. AI foundation models can learn to analyze these studies from clinical reports, reducing annotation burden and supporting clinical interpretation. However, existing models are trained by pairing each video with the full clinical report, including structures and findings its view does not show. This mismatch lets a model associate a finding with incidental or spurious signals rather than its visual evidence, which limits accuracy, anatomical grounding and clinical trust. Here we introduce EchoAlign, a vision-language foundation model developed on 2.87 million echocardiographic videos and images from 159 clinical centers. EchoAlign aligns each cardiac structure, video and study with its report text, and a visibility matrix restricts supervision to the views that actually depict each structure. We compare it with five public foundation models on 0.47 million test videos across ten unseen external datasets from more than 25 clinical centers. EchoAlign achieves the highest mean AUROC of 0.890 (95% CI, 0.881 to 0.897) for classification and the highest mean quadratic weighted kappa of 0.530 (95% CI, 0.511 to 0.544) for severity grading. Across 62 clinical findings, EchoAlign provides one model that detects findings, grades their severity, estimates measurements and segments cardiac structures.",
    "published": "2026-11-20T12:08:22Z",
    "updated": "2026-11-20T12:08:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.27517"
  },
  {
    "id": "2611.27516",
    "title": "PhiJEPA: Denoising Latent Predictions for Visual Representation Learning",
    "authors": [
      "Makoto Yamada",
      "Yao-Hung Hubert Tsai"
    ],
    "abstract": "Can a predictor trained to infer hidden image regions still help a world model plan when part of an object disappears from view and the visible context is blurred? We introduce PhiJEPA, a joint-embedding predictive architecture that adapts PhiNet's two-stage prediction to masked Transformers. From sparse, photometrically corrupted context, a Transformer block predicts hidden tokens of an independently corrupted teacher view. A token-wise MLP then maps these predictions to clean teacher tokens. Controlled ablations show that the combined objective improves dense features over the tested one-stage alternatives. Pre-trained on ImageNet-1K with $5.6\\times10^{19}$ training FLOPs, PhiJEPA achieves 69.3 mIoU on linear PASCAL VOC segmentation, exceeding the evaluated I-JEPA and DSeq-JEPA checkpoints in segmentation accuracy, with 25\\% fewer training FLOPs than I-JEPA. It also improves hidden-region segmentation over Simple I-JEPA (49.1 vs.\\ 44.3 mIoU). As an application, we use the frozen encoder in DINO-WM on PushT, and reuse the pre-training predictor, which JEPAs usually discard, to complete occluded tokens without fine-tuning. In open-loop planning with simultaneous object occlusion and Gaussian blur ($σ=2$ pixels), predictor completion raises success from 33\\% to 65\\%, compared with 25\\% for Simple I-JEPA with its predictor and 40\\% for iBOT with pixel inpainting. Together, these results support two-stage latent prediction as an efficient approach to learning visual representations that remain useful under photometric degradation and support completion under partial observation.",
    "published": "2026-11-20T12:07:30Z",
    "updated": "2026-11-20T12:07:30Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2611.27516"
  },
  {
    "id": "2611.27515",
    "title": "Beyond a Single Human Demonstration: Learning from Scored Trajectory Alternatives for End-to-End Driving",
    "authors": [
      "Xinyao Rao",
      "Zecheng Tang",
      "Liuxuan Sun",
      "Zheyuan Lai",
      "Minjun Yu",
      "Xun Cao",
      "Wei Li"
    ],
    "abstract": "Human driving logs record only one trajectory per scene, leaving other feasible driving choices without explicit trajectory targets or quality labels. This limits supervision for end-to-end planners that generate and refine multiple candidate trajectories. Meanwhile, conditioning refinement on a large vision-language model adds substantial online inference cost. We propose DriveSTA, which extends autoregressive proposal generation and proposal-conditioned residual flow refinement with scored trajectory alternatives. For each training scene, we generate alternatives offline through smooth deformations of the recorded trajectory and evaluate their simulated execution against logged traffic. Diverse, high-quality alternatives supervise distinct proposals and define residual targets for quality-guided denoising, while candidates spanning the full score range train a scorer to assess driving quality. A shared joint-embedding predictive architecture (JEPA), adapted through masked video-feature prediction, encodes observed frames once and provides temporal context for both refinement and scoring. On NAVSIM v1 Navtest, DriveSTA ranks first among the compared planners trained on NAVSIM data alone. With expanded training data, DriveSTA-Scale achieves state-of-the-art results among the compared methods on Navtest and closed-loop HUGSIM, while reducing mean planner forward-pass latency by 73% relative to ChainFlow-VLA in matched evaluations.",
    "published": "2026-11-20T12:07:24Z",
    "updated": "2026-11-20T12:07:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.27515"
  },
  {
    "id": "2611.27512",
    "title": "PGS-PCQA: Perceptually Gated Synthetic Supervision for No-Reference Point Cloud Quality Assessment",
    "authors": [
      "Qinyuan Fan",
      "Meng Zhang",
      "Clemens Gühmann"
    ],
    "abstract": "Existing no-reference point cloud quality assessment (NR-PCQA) methods perform well within individual datasets but generalize poorly across datasets. We identify insufficient distortion coverage in training data as a key cause: on unseen distortion types, models rank severity levels near chance or even in reverse. We propose perceptually gated synthetic supervision for no-reference point cloud quality assessment (PGS-PCQA), an NR-PCQA model trained with synthetic distortion ranking. It builds a synthetic distortion bank from source reference point clouds and uses within-type severity ranking as supervision in addition to the source mean opinion scores (MOS), requiring no subjective scores for the synthetic samples. Since higher severity does not always mean lower perceived quality, a perceptual gate softens the ranking targets of pairs with small perceptual differences in rendered views. The synthetic supervision is used only during training and needs no target-domain data. In a single training run on SJTU-PCQA, PGS-PCQA achieves Spearman rank correlation coefficients (SRCCs) of 0.709 on WPC and 0.751 on BASICS. The corresponding published DSP-PCQA scores are 0.595 and 0.723. Under reference-disjoint cross-validation, PGS-PCQA achieves SRCCs of 0.955 on SJTU-PCQA, 0.934 on WPC, 0.906 on BASICS, and 0.791 on LS-PCQA Part I. In the exclusion experiment, the reported scores for the reduced synthetic bank represent 58-65% of the full-bank SRCC gain relative to training without the bank. Code is available at https://github.com/Fan-QY/PGS-PCQA.",
    "published": "2026-11-20T12:02:08Z",
    "updated": "2026-11-20T12:02:08Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.27512"
  },
  {
    "id": "2611.28185",
    "title": "SAMA: Training-Free Consensus Ridge Tracking for Camera-Based Heart Rate on Five Public Datasets",
    "authors": [
      "Sudhakar Mishra"
    ],
    "abstract": "Remote photoplethysmography (rPPG) is usually benchmarked by one heart rate per video, a figure that hides the short windows in which a tele-consultation would actually read the pulse. We present SAMA, a training-free estimator that (i) forms a quality-weighted consensus of POS and CHROM chrominance spectra, (ii) discounts frequencies occupied by pulse-free references derived from the same frames (frame motion, skin-mask geometry and background brightness), (iii) follows the heart rate through time with a Viterbi ridge under a random-walk prior, and (iv) returns a track-filtered, amplitude-normalised waveform with a per-window confidence. No parameter is learned and no dataset-specific tuning is used. On 218 recordings from 111 participants in five public datasets (UBFC-rPPG, PURE, SUMS, M3PD and a two-participant subset of MMPD), all processed with the same fixed face box and scored with a re-implementation of the rPPG-Toolbox protocol, SAMA has the lowest mean absolute error (MAE) averaged over datasets at every protocol level: 4.40 against 5.13,bpm for POS per video, 4.80 against 5.43 on 30,s windows and 5.05 against 6.59 on 10,s windows. Pooled over participants, the bootstrap interval of its paired difference from POS excludes zero on 30,s and 10,s windows (Wilcoxon p=0.11 and 0.004) but not per video, and it does not beat POS on SUMS per video or on the MMPD subset. Withholding the 20\\% least confident windows lowers the pooled 10,s error from 4.06 to 2.33,bpm. We also show that the per-video protocol has a floor of 1.2--1.6,bpm on datasets where heart rate drifts, and that skin tone cannot be recovered from uncalibrated video, which motivates the instrumented, skin-tone-stratified collection we propose for the Indian population. The method does not surpass the best published neural networks on UBFC-rPPG; we report where it stands against them without re-running them.",
    "published": "2026-11-20T11:57:22Z",
    "updated": "2026-11-20T11:57:22Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.28185"
  },
  {
    "id": "2611.25626",
    "title": "Physical Laws without Physics Loss? Probing Learned Dynamics in Video World Models through Forced Response",
    "authors": [
      "Yutao Li",
      "Chen Wang",
      "Wangmeng Zuo",
      "Hui Li"
    ],
    "abstract": "Do video world models learn physical laws without a physics loss, or merely imitate motion? Overall motion and appearance scores cannot settle it. We investigate this through nonlinear forced response: an excitation shakes the support of a suspended object. We introduce dual visual-numeric conditioning and adapt six image-to-video backbones to predict this motion using only the flow-matching loss. Wan predicts motion accurately and generalizes to unseen excitations, objects, poses, and scenes. Counterfactual tests suggest capabilities beyond replaying training videos. But what laws have they learned? We design three tiers of tests using Taylor expansions of the dynamics and geometry. All six reproduce the linear response, including resonance; five capture higher-order dynamics, including nonlinear softening. Remarkably, softening is barely present in training: only 0.74% of the swing's squared displacement. Extensions to a double pendulum and a rocking block show sustained dynamics are learned more faithfully than brief impacts. Yet learned dynamics may fail to appear when state estimation or propagation goes wrong. We turn these tests and findings into strategies to improve video training and generation.",
    "published": "2026-11-19T07:14:01Z",
    "updated": "2026-11-19T07:14:01Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.25626"
  },
  {
    "id": "2611.25621",
    "title": "DAWN: Robust Neural Blind Deconvolution via Alternating Wiener Guidance",
    "authors": [
      "Yida Pan",
      "Yixuan Jia",
      "Chaoyan Huang",
      "Qing Qu",
      "Ismail Alkhouri"
    ],
    "abstract": "Blind image deconvolution (BID) is an ill-posed inverse problem that aims to jointly recover a sharp image and blur kernel from a single degraded observation. Under nontrivial and high noise, which is common in photography and scientific imaging such as microscopy, BID remains particularly challenging, as existing methods suffer from noise overfitting and inaccurate kernel estimation. Existing training-data-free learning methods for BID, such as those based on the deep image prior (DIP), often utilize external guidance by including model-based estimates as additional loss terms, which underexploits the information these estimates carry especially under nontrivial noise. To address these challenges, we propose DAWN, a training-data-free DIP framework that alternates between injecting model-based estimates directly into the model input and refining this imperfect estimate with the network's own prior. To provide more reliable kernel estimates for these injections, we apply autoencoding regularization to both the image and kernel networks. On natural and scientific images under varying levels of Gaussian and Poisson noise, DAWN outperforms state-of-the-art methods in both image and kernel quality (achieving up to +4.5 dB over the next best baseline on the Levin dataset at $σ= 0.1$). Without any training images, DAWN remains highly competitive with a state-of-the-art diffusion model on FFHQ, despite the latter being trained on a massive number of in-distribution images.",
    "published": "2026-11-19T07:06:43Z",
    "updated": "2026-11-19T07:06:43Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.25621"
  },
  {
    "id": "2611.25620",
    "title": "CaT-Movie: Balancing Global Planning and Local Rendering for Long Multi-Shot Video Generation",
    "authors": [
      "Jinpeng Lu",
      "Haoyuan Shi",
      "Yuanshen Guan",
      "Jiyuan Xia",
      "Bin Wu",
      "Yinda Chen",
      "Zhiwei Xiong"
    ],
    "abstract": "Current multi-shot video generators render only limited durations per pass, requiring long movies to be stitched from local segments across which narrative progression and visual identity drift. To synthesize long-horizon movies with Coherence across Time, we present CaT-Movie, a multi-shot generation system consisting of a global story planner and a local window renderer. The planner expands user requests via a large language model to preserve, infer, and complete story details, while deterministic code maintains the resulting storyboard across shots to compile self-contained shot prompts and index reference frames from generated history. To execute this guidance, the renderer applies reference-routed sparse self-attention and shot-wise cross-attention to route identities from the indexed frames while isolating per-shot textual conditions. Given the scarcity of high-quality open-source multi-shot data, we construct a dataset of over 350K film shots annotated with semantic state transitions, entity grounding, and multi-granularity requests. We further build CaT-MBench, a benchmark on held-out films with the same annotations. It gives every baseline its native format and counts cross-shot consistency only when a cut opens a new camera setup, preventing repeated framing from passing as consistency. On CaT-MBench, CaT-Movie attains the highest average score and the most consistent characters among all methods. The project page is available at https://jinplu.github.io/CaT-Movie/.",
    "published": "2026-11-19T07:06:36Z",
    "updated": "2026-11-19T07:06:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.25620"
  },
  {
    "id": "2611.25619",
    "title": "Cyber-Physical RSI for AI-RAN: A Case Study",
    "authors": [
      "Binghan Wu",
      "Kai Zeng",
      "Zhiqi Li",
      "Zhigang Wang",
      "Yang Liu",
      "Ya-Qin Zhang",
      "Joseph Sifakis",
      "Ye Ouyang"
    ],
    "abstract": "Learned models for radio access networks (RANs) are often developed using simulation, yet their predictions can shift when exposed to physical propagation conditions, protocol behavior, and equipment implementations. This paper presents a cyber-physical recursive self-improvement (RSI) framework for AI-RAN that connects a task-oriented student model, an experiment-planning coach agent, a calibratable virtual environment, and a physical host agent. Physical measurements are organized as evidence for both model adaptation and subsequent experiment planning. We examine an implementation of the physical-feedback pathway using ping-pong handover as a case study. The system completes 12 physical executions organized into six baseline--candidate pairs, updates the student from measured outcomes, and evaluates the revised model on reserved physical configurations. In the observed short-window tests, increasing the time-to-trigger from 320 to 1280\\,ms changes the ping-pong count from three to zero. The updated student achieves a grouped-validation mean absolute error (MAE) of 2.673 round trips/min, while a common three-configuration physical evaluation yields MAEs of 1.240 and 1.601 round trips/min for the pre-feedback and post-feedback models, respectively. These results characterize both the operational feedback loop and the parameter-dependent generalization behavior revealed by new physical experiments.",
    "published": "2026-11-19T07:04:55Z",
    "updated": "2026-11-19T07:04:55Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.25619"
  },
  {
    "id": "2611.25617",
    "title": "Splice-Core: Low-Order-Bit-Splicing GEMM for Highly Energy-Efficient AI Inference Accelerators",
    "authors": [
      "Prabhu Vellaisamy",
      "Hsien-Fu Hung",
      "Andrew Kim",
      "Shawn Blanton",
      "John Paul Shen"
    ],
    "abstract": "Splice-Core is a temporal-unary/binary (tub) hybrid general matrix multiplication (GEMM) unit that minimizes low-order accumulation latency, while retaining value-dependent execution for high-order activation bits. We present two novel processing element (PE) variants: (i) Splice-BP utilizing bit planes, and (ii) Splice-LUT, which selects a shared weight multiple in a single cycle. Compared to a binary systolic array, Splice-BP/Splice-LUT achieve 77.4%/76.4% geometric-mean tile energy reductions, respectively, across 26 INT4 convolutional neural network (CNN) and large language model (LLM) workloads in 45nm. Splice-LUT further increases geometric-mean tile throughput by 44.4% and reduces geometric-mean energy-delay product (EDP) by 6.13x across the 26 configurations. Across the evaluated W8A8 convolution and expert-projection workloads, Splice-BP and Splice-LUT reduce tile energy by 77.3-88.1%. Post-place-and-route INT4 yields 14%/9% smaller area for Splice-BP/Splice-LUT, compared to the systolic array.",
    "published": "2026-11-19T07:03:38Z",
    "updated": "2026-11-19T07:03:38Z",
    "categories": [
      "cs.AR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.25617"
  },
  {
    "id": "2611.25614",
    "title": "Don't Lose the Future: Latent-Aware 4-Bit Quantization of World Action Models",
    "authors": [
      "Yichen Guo",
      "Yanlong Chen",
      "Xinyue Zhang",
      "Mohan Liu",
      "Song Zhang",
      "Yawei Li"
    ],
    "abstract": "World action models (WAMs) predict how a scene will evolve and condition their actions on this predicted future. Deploying them on a robot's onboard computer calls for 4-bit weights, activations and key-value caches (W4A4KV4). Existing 4-bit quantizers for WAMs preserve the generated action, and estimate sensitivity one denoising step at a time. However, they fail to preserve the fidelity of the predicted future: once the action pathway is protected, the remaining action error enters mostly through a degraded future that none of them deliberately protects. We propose LAQ, a latent-aware quantization framework that preserves the predicted future where it is written, stored and read. Specifically, we introduce a reader metric, which measures future error by its effect on the action, and a read count, which weights each rounding error by the number of denoising steps that read it. Together they give the allocation of precision over activations and caches a closed-form solution. We further develop gaze-guided refinement, which gives the tokens the action attends to a second 4-bit pass in the denoising loop and in the cache. All weights stay at 4 bits, with no high-precision branch and no per-task recalibration. On the LIBERO-Plus benchmark, LAQ reaches 76.4% and 83.3% average success on Fast-WAM and Cosmos-Policy, within 1.2 percentage points of the 16-bit models and all above the baselines with 16-bit KV caches. It compresses the model by 3.8x, reduces the peak GPU memory of the whole policy by 2.3x, and runs 1.66x faster than the 16-bit model. On a real AgileX PiPER arm, it reaches 47.0% average success over three tasks, against 52.0% for the 16-bit model and 30.0% higher than QuaRot.",
    "published": "2026-11-19T06:59:37Z",
    "updated": "2026-11-19T06:59:37Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.25614"
  },
  {
    "id": "2611.25613",
    "title": "Can an LLM Repair a Language Model in Weight Space Without Gradient Training?",
    "authors": [
      "Bharath Kumar Bolla",
      "Raghavender Surya Upadhayula",
      "Vishnu Surya Reddy Nandi",
      "Ramesh Nandipalli"
    ],
    "abstract": "Although an external language model can select and test repairs to another model's weights, behavior can also be recovered through fixed numerical edits. We assessed the value of interactive selection in a controlled study of Transformer repair. After inspecting predictions, activation summaries, and weight statistics, the editor selects projection recipes to apply to the target without gradient updates. We analyzed 20 recorded sessions involving five masked and causal language models, comparing the selected edits with fixed projections, scripted and matched-budget black-box search, and low-rank adaptation. Under the core two-layer fault, live selection matches black-box search on SmolLM2 and Qwen2.5. For Pythia, live selection achieves 65.62% completion accuracy, compared with 0% for black-box search and 66.15% for a fixed projection. Under a separate compound fault affecting attention and feed-forward weights, both scripted and LLM-guided selection increase the descriptive five-checkpoint mean from 24.89% to 71.25% using the same operator family. On unmodified checkpoints, scripted projection yields small gains or losses on a separate set of framed questions. The experiments identify cases in which feedback changes an edit decision, operator coverage accounts for recovery, or supervised adaptation performs better. Combined with measurements of parameter restoration and preservation, these comparisons establish the scope of controller-guided repair for the tested faults and completion tasks.",
    "published": "2026-11-19T06:59:01Z",
    "updated": "2026-11-20T13:36:48Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.25613"
  },
  {
    "id": "2611.26663",
    "title": "Adding One More Agent: How AI Team Size and Formation Shape Productivity and Diversity in Human-AI Brainstorming Teams",
    "authors": [
      "Rong-Ching Chang",
      "Hao-Chuan Wang"
    ],
    "abstract": "Generative AI has improved individual productivity, but whether adding a plurality of AI partners helps or hurts remains open. We crossed AI partnership (one versus two) with behavioral formation (calibrated to average human behavior versus customized by the participant) in a brainstorming experiment ($N$=168) with human-human dyads as reference. Two-AI rooms posted more ideas to the shared board, but human-authored ideas dropped substantially. With one AI partner, formation mattered: humans paired with an average-calibrated AI posted more than any other condition. With two, this effect vanished. Humans continued talking but converted fewer ideas into board posts. AI social talk predicted more human posts, while AI posting volume predicted fewer. AI presence increased global diversity of human-authored ideas, but only a second AI increased within-session differentiation. The number of AI partners and their formation can reshape what the human contributes; single-agent results do not generalize to multi-agent teams.",
    "published": "2026-11-19T06:58:05Z",
    "updated": "2026-11-19T06:58:05Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.26663"
  },
  {
    "id": "2611.25608",
    "title": "MetaScanner: An Empirical Study and Proactive Defense against Deceptive UI Attacks in Social VR",
    "authors": [
      "Junhee Lee",
      "Seungwon Woo",
      "Minseok Kim",
      "Jongseop Kim",
      "Kiyoung Kim",
      "Hwanjo Heo",
      "Jinwoo Kim"
    ],
    "abstract": "Social virtual reality (VR) platforms have surged in popularity but continue to face significant security challenges, including privacy invasion and user manipulation. Yet, the security risks posed by deceptive content remain largely unexplored. In this paper, we introduce four novel deceptive UI attacks that covertly manipulate social VR users into performing unintended actions without their awareness. We show how adversarial content creators can embed seemingly benign scripts and interactive elements within carefully designed virtual worlds, deceiving users into unknowingly carrying out harmful behaviors. We implemented these attacks on VRChat, a leading social VR platform, and an IRB-approved user study involving 30 participants confirmed their effectiveness. To mitigate these threats, we propose MetaScanner, a proactive analysis system that efficiently scans virtual world assets, including scripts and interactive objects, to identify suspicious or deceptive elements before users are exposed to them. We demonstrate that MetaScanner can successfully detect all threats in test worlds where the four attack scenarios were implemented. Additionally, MetaScanner shows its lightweight nature, with an average scanning time of 5 seconds across 38 real-world assets.",
    "published": "2026-11-19T06:55:13Z",
    "updated": "2026-11-19T06:55:13Z",
    "categories": [
      "cs.CR",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.25608"
  },
  {
    "id": "2611.25605",
    "title": "Copilot or Culprit? How AI Is Changing Open-Source Bug Reporting and Maintenance",
    "authors": [
      "Yinuo Liu",
      "Yunlong Lyu",
      "Zichao Luo",
      "Tian Dong",
      "Zian Luo",
      "Peng Chen",
      "Hao Chen"
    ],
    "abstract": "AI-generated bug reports have drawn criticism for unreliable claims and faulty reproducers that burden maintainers. However, as LLM capabilities improve, some maintainers have begun to express more positive views on AI use in bug reporting and maintenance. Understanding this evolution requires examining whether AI-involved reports are becoming more reliable, which uses of AI are associated with valid findings, and how maintainers investigate these reports and act on them. To this end, we conduct the first large-scale study of 120,918 bug reports from 101 open-source projects between January 2024 and September 2026, tracing AI involvement from discovery and reporting through validation and resolution. Our findings show that AI-involved reports become more complete over time, with a growing share of reports confirmed as valid. In bug reporting, AI for reproduction and diagnosis are associated with higher validity, whereas report writing is not. Extends into maintenance, maintainers increasingly use AI to investigate code and recommend fixes. However, they devote more effort to AI-assisted reports of human-discovered bugs than to reports of AI-discovered bugs. These findings highlight both AI's growing participation in bug investigation and the continuing need for verification and follow-up. Drawing on these findings, we provide practical guidance for turning AI-generated findings into verifiable reports: emphasizing reproducibility, verification, and accountability. We followed this guidance when submitting 53 reports on AI-discovered bugs, of which 69.81% were accepted by maintainers as of writing.",
    "published": "2026-11-19T06:53:32Z",
    "updated": "2026-11-19T06:53:32Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.25605"
  },
  {
    "id": "2611.25603",
    "title": "On the Informativeness of Structural Stability Bounds for GNNs: GINs versus GATs",
    "authors": [
      "Alan Gany",
      "Paul Landrier",
      "Bogdan Cautis",
      "Laks V. S. Lakshmanan",
      "Silviu Maniu"
    ],
    "abstract": "Stability bounds for graph neural networks limit how much node representations can drift when the graph changes, but they are rarely compared with the simplest alternative: a bound on the distance between any two outputs, whatever the graph. We derive structural stability bounds for Graph Isomorphism Networks (GINs) and single-head GATv1 networks under deterministic edge perturbations that need not be small, and compare each with such a perturbation-independent diameter bound. For GINs, we characterize exactly when the stability bound is tighter, through a condition linking perturbation size, depth and maximum degree; it holds with a wide margin on Cora, but fails beyond a few layers on the low-degree MUTAG graphs. For GATv1, the bound is never tighter, which calls for analyses based on attention masses.",
    "published": "2026-11-19T06:49:22Z",
    "updated": "2026-11-19T06:49:22Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.LO"
    ],
    "url": "https://arxiv.org/abs/2611.25603"
  },
  {
    "id": "2611.25599",
    "title": "Tether: Verified Stateful Policy Engine for System-Level Monitoring of Agents",
    "authors": [
      "Meghana Aparna Sistla",
      "Alaia Solko-Breslin",
      "Somesh Jha",
      "Aditya Kanade",
      "Krishnamurthy Dj Dvijotham"
    ],
    "abstract": "Autonomous AI agents are increasingly deployed for long-running tasks that execute arbitrary shell commands or programs. However, these actions can result in unauthorized network requests or persistent, malicious changes to the user's file system, processes, or privileges. Existing defense mechanisms rely on either LLM-based monitors, which lack provable safety guarantees, or stateless policy enforcement layers, which miss multi-step data flows and execution side-effects unmodeled by the policy language (e.g., network calls initiated inside a Python script). We introduce Tether, a framework for runtime enforcement of stateful security policies over the observed side-effects of an agent's actions. Tether executes each proposed action in an ephemeral, isolated sandbox, inferring abstract action semantics from observed system calls. Tether then enforces stateful policies over these inferred semantics, permitting actions to proceed only if they comply with the policy. Policies and action semantics are defined in an embedded DSL in Lean 4 capable of expressing diverse constraints, including information flow control (IFC), access control, and network security policies. Because actions can propagate labels from sources to destinations, a single rule can enforce fine-grained IFC policies across multi-step execution flows of arbitrary length. Expressing policies in Lean enables formal verification that they satisfy global security invariants (e.g., preventing network access after reading a sensitive file). We evaluate Tether on realistic coding-agent benchmarks across both benign and adversarial trajectories. With a single policy shared across all tasks, Tether blocks 100% of in-scope attacks while maintaining a benign false-positive rate under 5%.",
    "published": "2026-11-19T06:46:27Z",
    "updated": "2026-11-19T06:46:27Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.25599"
  },
  {
    "id": "2611.24371",
    "title": "One Affinity, Two Axes: Bidirectional Slot Attention for Iterative Aggregation across the Structure--Detail Spectrum in Visual Retrieval",
    "authors": [
      "Zihang Wang",
      "Wenkai Zhu",
      "Lingdong Kong",
      "Teng Yan",
      "Alan Liang",
      "Shuyuan Li",
      "Xieyuanli Chen",
      "Dong Kong",
      "Guanyu Zong"
    ],
    "abstract": "Aggregating dense patch tokens into compact and discriminative global descriptors is central to visual retrieval. Although foundation models provide rich local features, existing aggregation heads still rely on single-pass mappings and lack an explicit mechanism to coordinate structural and fine-grained cues. Therefore, we propose Bidirectional Slot Attention (BiSA), which reformulates aggregation as an iterative coupled system. Cross-Axis Consensus (CAC) progressively refines learnable slots by interpreting a single shared token--slot affinity along two complementary axes. Along the competition axis, slots vie for each token under a temperature shared across all of them, determining token ownership and inducing a non-redundant scene decomposition. Along the selection axis, a slot-specific temperature governs the breadth of each slot's response, spanning a spectrum from broad layouts to sparse fine-grained details. Their consensus couples non-redundant decomposition with multi-granular slot specialization. Furthermore, the two axes expose intrinsic token-reliability cues at no extra cost: a token's claim strength under competition and its salience under selection. Progressive Token Filtering (PTF) converts these cues into a retention probability that down-weights unreliable tokens before the next CAC iteration, without any segmentation branch or external prior, forming a self-reinforcing loop of competitive decomposition, selective focusing, and feedback purification. Across all three retrieval tasks, BiSA leads on five of six place recognition benchmarks (+4.2 R@1 on Baidu Mall), tops all 16 metrics of drone--satellite geo-localization (+8.4 R@1 at 150 m), and improves instance-level retrieval on ROxford-Hard by 4.5 mAP points. Notably, the selection axis adds only 20 learnable scalars, yet improves average R@1 by 2.8 points.",
    "published": "2026-11-18T13:04:10Z",
    "updated": "2026-11-18T13:04:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.24371"
  },
  {
    "id": "2611.24366",
    "title": "SCOUT: Risk-Guided Foundation-Model Escalation for Robust Tissue Detection in Whole-Slide Images",
    "authors": [
      "Cristian Tommasino",
      "Antonio M. Rinaldi"
    ],
    "abstract": "Reliable tissue detection is essential for whole-slide image analysis, yet high average segmentation accuracy can conceal failures involving pale tissue, small fragments, and heterogeneous staining. Pathology foundation models offer transferable representations, but exhaustive inference is computationally demanding and may introduce false-positive tissue predictions. We propose SCOUT (Selective Correction of Uncertain Tissue), a risk-guided cascade that selectively refines an initial thumbnail-based tissue mask. A lightweight audit network estimates the spatial distribution of segmentation errors and prioritizes candidate regions for processing by a frozen pathology foundation model. An asymmetric consensus rule integrates the resulting predictions with the initial mask to recover missed tissue while limiting false positives. A calibrated slide-level review score additionally controls the marginal rate of unflagged case-group failures under the calibration assumptions. Evaluation on a public multi-source, multi-stain benchmark shows that SCOUT reduces the proportion of case groups requiring mask correction from 38.1% for the best released detector to 18.6%, with particularly pronounced improvements in immunohistochemistry. Source-held-out experiments demonstrate better generalization than a segmentation network trained on the same annotations, while selective inference achieves an observed failure rate no higher than processing all candidate regions. Downstream, lymph-node classification with SCOUT masks is non-inferior to that obtained with two of the three released detectors evaluated. A variant built on an openly licensed foundation model is publicly released as an installable Python package with trained weights. These results support risk-guided foundation-model inference as an effective approach to tissue detection across heterogeneous histopathology data.",
    "published": "2026-11-18T13:00:38Z",
    "updated": "2026-11-18T13:00:38Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.24366"
  },
  {
    "id": "2611.24363",
    "title": "Transferable Named Sparse Features for Morphology-based Gleason Grading",
    "authors": [
      "Argyrios Zafeiriou",
      "Athanasios Kallipolitis",
      "Ilias Maglogiannis"
    ],
    "abstract": "Deep learning systems grade prostate biopsies at the level of pathologists, but most report a grade without the glandular architecture that justifies it. This work presents a grading system built on a sparse code over the tokens of a pathology foundation model. A sparse autoencoder pretrained on biopsies is aligned with multi-reader annotations, so that 69 of its 2048 features are named after Gleason morphologies such as cribriform glands, cords, and comedonecrosis. The same code feeds a grading network, which reads all features to predict Gleason patterns and the Grade Group, while morphology maps read directly from the named features. We evaluate the system on five public datasets that include needle biopsies, tissue-microarray cores, multi-reader annotations, and three scanners. The morphology maps remain stable across alignment runs and, without retraining, detect cribriform glands in external biopsies (area under the receiver operating characteristic curve, AUROC, 0.849) and pattern 5 in unseen cores when evaluated by up to six pathologists (AUROC 0.846 to 0.919). In an independent biopsy cohort, Grade Group agreement with three pathologists on Leica scans is close to their agreement with each other. Removing the named features reduces the corresponding Gleason pattern predictions by 49% to 98%, with effects larger than those from 20 activity-matched random feature removals. These results show that a shared sparse representation can support competitive Gleason grading while providing named morphological evidence that transfers across datasets and whose contribution to grading can be measured directly.",
    "published": "2026-11-18T12:57:35Z",
    "updated": "2026-11-18T12:57:35Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.24363"
  },
  {
    "id": "2611.24362",
    "title": "PIPETTE: Prompt Injection Purple-Teaming for Robust LLM Agents",
    "authors": [
      "Lipeng He",
      "Yihan Wang",
      "Jiawen Zhang",
      "N. Asokan"
    ],
    "abstract": "Large language model (LLM) agents routinely interact with untrusted external data, exposing them to indirect prompt injection (IPI) attacks that hijack agents into executing attacker-chosen tasks. To uncover these vulnerabilities at scale, automated red-teaming methods often leverage reinforcement learning (RL) to generate attacks that achieve high attack success rates (ASR). Model developers use the attacks discovered during internal red-teaming to harden agents through adversarial training before deployment, a collaborative offensive-defensive process known in cybersecurity as purple-teaming. However, we show that achieving high ASR during red-teaming does not guarantee robustness gains from subsequent adversarial training. Specifically, we find that two state-of-the-art RL-based red-teaming methods, RL-Hammer and PISmith, suffer from mode collapse, repeatedly discovering similar attack strategies whose additional successes add no additional robustness improvements to adversarial training. To address this gap, we introduce PIPETTE, a unified prompt injection purple-teaming framework that effectively converts red-teaming discoveries into defender robustness improvements. PIPETTE employs a dictionary learning-based reward that encourages broader coverage of attack strategies during red-teaming. It also integrates an on-policy adversarial training pipeline tailored to IPI defense, enabling agents to resist attacks while completing legitimate user tasks. Extensive evaluations across agentic benchmarks (AgentDojo and ASB) demonstrate that PIPETTE produces defenders that achieve near-zero attack success rates on static attacks and can withstand strong adaptive attacks, while maintaining benign task utility close to that of the undefended baseline.",
    "published": "2026-11-18T12:56:06Z",
    "updated": "2026-11-18T12:56:06Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.24362"
  },
  {
    "id": "2611.24360",
    "title": "Towards Pose-Robust Few-Shot Vision-Language-Action Models",
    "authors": [
      "Wenhao Li",
      "Zhongyi Han",
      "Yuhao Wei",
      "Liang Han",
      "Yilong Yin",
      "Liqiang Nie"
    ],
    "abstract": "Fine-tuning a vision-language-action (VLA) model on a few dozen demonstrations is the standard way to put a manipulation policy on a robot, yet the resulting policy silently assumes that the camera and the robot base stay exactly where they were during data collection: a bumped tripod or a base re-docked a few centimetres away makes it reach for the wrong place. We show that both failures are one phenomenon, a change of the camera-to-base extrinsic that the policy has memorised, and that the robot carries everything needed to undo it. We introduce WACO, a world-anchored canonicalization framework for VLA models: the arm, placed by forward kinematics at the measured joint angles, serves as a metric calibration target, and the static scene serves as the world anchor that tells a moved camera from a moved robot. From a single RGB-D frame, WACO estimates both shifts without ground-truth extrinsics or extra data, canonicalises the image to the calibration viewpoint and the state, action and start pose to the calibration base frame, and fine-tunes the unmodified policy under the artefacts of its own estimator. We also introduce LIBERO-PoseShift, the first benchmark for RGB VLAs with graded camera, base and compound shifts. Across LIBERO-PoseShift, the LIBERO-Plus camera track and four real-world tasks on a UR5e robot, WACO consistently outperforms the standard few-shot recipe and prior viewpoint-robust methods, raising shifted success by 13.2 points in simulation and by 36.7 points on the real robot, recovering 90% of the simulation gap to a ground-truth oracle and 87% of the real-robot gap, and establishing a new state of the art among methods that use no perturbed training data, with no test-time calibration. Project page: https://peacelwh.github.io/WACO/.",
    "published": "2026-11-18T12:54:16Z",
    "updated": "2026-11-18T12:54:16Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.24360"
  },
  {
    "id": "2611.24357",
    "title": "Semantic Context Handoff with On-Demand Evidence for Long-Horizon Agents",
    "authors": [
      "Guolong Zheng",
      "Chen Hou",
      "Xu Yang",
      "Jianshan Zhang",
      "Tao Huang"
    ],
    "abstract": "Traditional long-horizon LLM agents often hand off context through full-history prompting, retaining all previous action--observation interactions. As execution proceeds, this history keeps growing, increasing inference cost and potentially degrading accuracy. Existing methods control this growth by preserving compact conclusions while removing earlier observations, but doing so can discard evidence that later becomes relevant. We introduce Semantic Context Handoff (SCH), whose central abstraction is state--evidence separation: a compact semantic state carries the agent's current interpretation, while supporting action--observation evidence remains separately addressable and can re-enter context when later execution makes it relevant, without separate summarization or retrieval-model calls. Empirically, SCH improves long-horizon agent performance while substantially reducing context cost. In a controlled 150-task SWE-bench study, SCH's evidence recovery improves Pass@1 from $80.0\\%$ to $86.9\\%$ at essentially unchanged token use and execution time. In the complete-system comparison, SCH achieves 86.9% Pass@1 while using 43% fewer tokens and 41% less wall-clock time than the strongest baseline by task performance. Across models and benchmarks, SCH consistently reduces token use relative to full-history prompting while remaining competitive with or improving upon the evaluated baselines. Trajectory analysis confirms that SCH recovers evidence from substantially earlier parts of the interaction history rather than merely preserving a recent context window.",
    "published": "2026-11-18T12:49:41Z",
    "updated": "2026-11-18T12:49:41Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.24357"
  },
  {
    "id": "2611.24353",
    "title": "When Figures Disagree with Text: Evaluating Autonomous Visual Evidence Verification in Scientific Papers",
    "authors": [
      "Guijia Zhang",
      "Hongbo Qiu",
      "Jiajun Zha",
      "Guohao Cai",
      "Hao Zheng",
      "Huihao Jing",
      "Kexu Cheng",
      "Shipeng Luo",
      "JinYang Huang",
      "Shing-Chi Cheung",
      "Changsheng Lu",
      "Haoxuan Che",
      "Harry Yang"
    ],
    "abstract": "Scientific figures carry evidence for the claims that cite them, so reviewing a paper means checking that a figure agrees with the text, and not only describing what the figure shows. Benchmarks of figure-text verification typically hand the model the figure, the claim, or the knowledge that an inconsistency exists, which leaves untested whether a model can find the figure worth checking in a complete paper, relate a visual element to the claim it conflicts with, and recognize the conflict. We study this autonomous setting on 31 full manuscripts, each carrying a reviewer-documented figure-text inconsistency from PRISMM-Bench that is hidden from the model. Six multimodal models review each PDF under a neutral prompt, and we then add one input at a time to the same manuscripts. Of 1,445 open-ended reviews, 60.6% mention the flawed figure, yet a grading rubric accepts only 3.3% as diagnosing its contradiction; a blind audit finds the rubric lenient, so we read these as rubric-accepted rates and compare conditions rather than absolute values. In a separate controlled run, naming the figure, without stating that it is flawed, raises rubric-accepted diagnosis from 4.3% to 20.4%, while a consistency instruction and coarse visual cues do not. When the contradiction is visible only in the rendered figure, text-only review yields no accepted diagnosis, while review of the rendered pages with the figure named reaches 15.8%. A baseline that lets the model choose which figures to check, ranked by centrality, stays at 4.8%. Deciding what to verify is thus a large part of the difficulty, and the selection rule we tested does not resolve it. Multimodal document understanding should be evaluated on whether a model can propose what to verify, not only answer questions about a figure it is handed.",
    "published": "2026-11-18T12:47:35Z",
    "updated": "2026-11-20T12:11:05Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.24353"
  },
  {
    "id": "2611.24352",
    "title": "OCTR2A: Real-Time RGB-to-BEV Trajectory Projection and Forecasting at Urban Intersections",
    "authors": [
      "Emanuele Iacobelli",
      "Simone Teglia",
      "Francesco Pro",
      "Claudia Melis Tonti",
      "Irene Amerini"
    ],
    "abstract": "Trajectory forecasting at urban intersections is often studied assuming that reliable bird's-eye-view (BEV) motion histories are available, which in practice requires costly resources such as LiDAR, aerial views, HD maps, or calibrated infrastructure. We address this upstream perception-to-forecasting problem by reconstructing and predicting agents' BEV trajectories only from paired opposite-corner RGB cameras mounted on existing urban infrastructure at variable heights at inference time. We introduce the Opposite-Corner Trajectory Reconstruction and Anticipation Architecture (OCTR2A), a modular pipeline integrating per-view detection with class refinement, geometric cross-camera matching, transformer-based BEV projection, and egocentric GRU forecasting, trained in cascade and mainly supervised with a soft multi-scale spatial-overlap loss. Since no public benchmark provides this sensing configuration, we introduce R3ST++, a Blender-based synthetic benchmark built from SIND trajectories that provides synchronized opposite-corner views, cross-view correspondences, and BEV ground truth, while also serving as a deployment-support simulator for site-specific fine-tuning. Experiments on these datasets show that, with 12 observed and 12 predicted frames at 10\\,Hz, OCTR2A achieves projection~-~forecasting ADE/FDE of 0.144/0.140~-~0.154/0.241~meters in real time on a single consumer GPU. Evaluated on ground-truth BEV histories, the forecasting module improves over the strongest state-of-the-art methods on SIND by 66.7\\%/41.7\\% ADE/FDE. Transfer experiments on TUMTraf-V2X show that R3ST++ pretraining supports adaptation to real-world roadside domains with different sensing configurations.",
    "published": "2026-11-18T12:47:15Z",
    "updated": "2026-11-18T12:47:15Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.24352"
  },
  {
    "id": "2611.24347",
    "title": "automodel: A Skill for Agentic Model Discovery",
    "authors": [
      "Marco Virgolin",
      "Harry Desmond",
      "Ester Bergantin",
      "Giorgio Morales",
      "John W. Sheppard",
      "Luigi Romano",
      "Alessandro Lucantonio"
    ],
    "abstract": "The search for better models, whether expressed as analytical equations or neural architectures, has increasingly shifted from manual design toward data-driven automation. While a multitude of algorithms exist, ranging from exhaustive search to AlphaEvolve, recent advances in general-purpose coding agents such as Claude Code and OpenAI Codex raise the question: could providing such systems with a \"model discovery recipe\" be enough to discover or improve models? We present automodel, an agent skill for general model discovery. With case studies in astrophysics, cardiovascular dynamics, precision agriculture, traffic flow, and vehicle tire dynamics, we show how commercial agents equipped with automodel can successfully identify novel and scientifically-relevant models. Our findings suggest that encoding model-discovery methodology as a portable agent skill can provide a simple, interactive, powerful and broadly applicable alternative to domain-specific automated discovery pipelines. The skill is available at: https://github.com/unlayer-ai/automodel.",
    "published": "2026-11-18T12:43:45Z",
    "updated": "2026-11-18T12:43:45Z",
    "categories": [
      "cs.AI",
      "astro-ph.CO",
      "astro-ph.GA",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2611.24347"
  },
  {
    "id": "2611.24342",
    "title": "Exploring Daily Emotional Well-Being through Personalized Data Analysis",
    "authors": [
      "Adriana Rodríguez Rodríguez"
    ],
    "abstract": "This project analysed daily emotional well-being from a personalized perspective using records of emotional states and contextual information derived from daily life. It was based on the idea that well-being is not a fixed value, but varies from day to day, and can be better understood in relation to individual context and behaviour. The work is framed within the field of Data Science and focuses on emotional states at an individual level. The project focused on constructing an integrated daily dataset from multiple personal data sources and analysing emotional states. The distributions of emotional variables, their temporal evolution and the differences between users were studied, together with their variability over time. Personality and well-being questionnaires were also incorporated as stable references to better contextualize daily emotional results. A simple personalized recommendation approach was then developed by comparing similar days within each user, exploring how past contextual conditions relate to differences in the user's emotional state. Finally, machine learning techniques were used to evaluate whether daily contextual information contains signals that help distinguish between different types of days relative to a person's usual well-being. The project adopted an applied approach, with an exploratory scope focused on understanding patterns rather than building a fully predictive system. The results showed that emotional well-being is very personal and changes from day to day. General models had limited value, while personalized approaches captured these differences much better, highlighting the importance of analysing each person on their own terms.",
    "published": "2026-11-18T12:40:49Z",
    "updated": "2026-11-18T12:40:49Z",
    "categories": [
      "cs.HC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.24342"
  },
  {
    "id": "2611.24334",
    "title": "Exploring multimodal AI--XR interactions for software development: From expert perspectives to semantic code outlines",
    "authors": [
      "Ilya Zakharov",
      "Alexey Markin",
      "Konstantin Ostroukhov",
      "Alexey Perminov",
      "Roham Koohestani",
      "Ekaterina Koshchenko",
      "Agnia Sergeyuk"
    ],
    "abstract": "AI tools can generate code quickly, but developers still need to understand and check the results. We explore how the enriched multimodal context derived from the extended reality (XR) workspace might help developers manage this information. We first interviewed 13 experts in AI, XR, and related fields to identify opportunities and design challenges (Study 1). These interviews informed two prototypes explored with 12 professional developers (Study 2): four tried a version where the code faded to become invisible after it was looked at, and eight tried a version that replaced viewed code sections with short descriptions of their purpose. In the second prototype, head direction helped determine when to offer a change, while manual input let developers apply it and reopen the original code. A separate open-ended demonstration with seven software-engineering researchers provided complementary feedback. Participants' accounts suggested that descriptions could provide an overview of unfamiliar code and serve as reminders when revisiting it. However, difficulty comparing descriptions with source code, headset limitations, and controls that deviates from regular IDE routines could introduce additional effort. These exploratory findings identify requirements for attention support: make summaries easy to recognize and access, preserve straightforward inspection of the original code, and retain familiar navigation and editing practices. The study contributes to human-centered multimodal systems by showing how the coordination of input channels and AI-generated representations must account for users' attention, verification needs, and established ways of working.",
    "published": "2026-11-18T12:36:29Z",
    "updated": "2026-11-18T12:36:29Z",
    "categories": [
      "cs.HC",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.24334"
  },
  {
    "id": "2611.24330",
    "title": "Can Weight-Space Programming Alter Learned Ethical Priorities?",
    "authors": [
      "Kai Yi Ji"
    ],
    "abstract": "We investigate whether a weight edit can alter how a model trades off honoring a commitment against benefiting more people. In a concept-supervised text model, we alter fitted choice weights so that the benefit required to override a formal pledge is larger than for an ordinary promise. Across six independently trained text readers, the edit selects the larger group in both orders on 100% of targeted ordinary conflicts and 83.3% of targeted formal conflicts. It preserves the source model's success rates on smaller conflicts and its factual accuracy. The remaining formal-conflict failures coincide with errors reading a beneficiary number. A separate classifier demonstrates why this distinction matters: reusing a factual answer passes an unconditional choice test but fails to preserve small-gap promises. In a YOLO11n pilot on COCO128, a bias edit increased small-target matches from 3/43 to 9/43, and an equivalent score calibration reproduced the retained detections. These exploratory results show a way to test selective changes to learned priorities in a model with an exposed trade-off mechanism. Whether the method can discover such changes in less structured language models remains open.",
    "published": "2026-11-18T12:31:23Z",
    "updated": "2026-11-18T12:31:23Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.24330"
  },
  {
    "id": "2611.22975",
    "title": "Large Language Models Have Not Yet Transformed Science",
    "authors": [
      "Ron Bekkerman",
      "Nichole Li",
      "Bahareh Kargar",
      "Mark Somers"
    ],
    "abstract": "The emergence of large language models (LLMs) in late 2022 has raised questions about the future of science, but assessing their impact requires understanding how scientific practices were already evolving. We analyze 2.5 million full-text papers across five disciplines from 2015 to 2025, tracing trends over a broad spectrum of lexical, structural, epistemological, and social dimensions. Aside from frequency shifts in some words, most pre-2023 trends continued with limited detectable breaks. Among the notable exceptions, growth in computer science coauthor teams accelerated significantly in Asia, while apparent declines in biomedical topic diversity largely reflected standardization in article formats. Our study establishes an empirical foundation for monitoring the health of global science as LLM adoption deepens.",
    "published": "2026-11-17T15:57:22Z",
    "updated": "2026-11-17T15:57:22Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CY",
      "cs.DL"
    ],
    "url": "https://arxiv.org/abs/2611.22975"
  },
  {
    "id": "2611.22973",
    "title": "VITAL: A Framework for Validating Agentic AI in Pharmaceutical Drug Development and Clinical Trial Operations",
    "authors": [
      "Sandeep Burugupalli",
      "Pedro Matos-Filipe",
      "Andrea Hita Ardiaca",
      "Adam Taylor",
      "Alex Grigorenko",
      "Natalia Jakubiak",
      "Xin Yu",
      "Raghav Mani",
      "Sherry Mangla",
      "Alvi Lai",
      "Rachel C. Mercado",
      "Pratik Shah",
      "Raja Shankar"
    ],
    "abstract": "Current assurance approaches do not establish whether evidence is sufficient to validate, monitor and govern agentic artificial intelligence (AI) within a pharmaceutical context of use. Plausible outputs may conceal failures in retrieval, reasoning, orchestration or human-control points, where reference standards are unavailable. We developed and operationalised VITAL (Validation by Intended use, Traceability, Autonomy and Lifecycle evidence), a validation framework for agents in clinical development, through landscape analysis, regulatory and standards mapping, expert interviews and multi-stakeholder refinement. VITAL integrates context of use, controls, behavioural validation and lifecycle evidence within a risk-adjusted framework. We applied VITAL across epidemiology and treatment-landscape analysis, site selection, enrolment rescue and trial-design trade-off support to translate autonomy, reversibility, transparency and patient impact into proportionate validation activities, evidence requirements and auditable reconstruction of system behaviour. VITAL may inform evidence requirements and lifecycle accountability for higher-risk pharmaceutical uses; evaluation should assess reproducibility across assessors, organisations and system configurations.",
    "published": "2026-11-17T15:55:13Z",
    "updated": "2026-11-17T15:55:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.22973"
  },
  {
    "id": "2611.22971",
    "title": "SEAM: Computer-Use Agents Know the Harm Between Screens, and Commit It Anyway",
    "authors": [
      "Yuxuan Zhou",
      "Chen Xiong",
      "Haitong Liu",
      "Kuofeng Gao",
      "Yang Bai",
      "Zhiyuan He",
      "Tao Dai",
      "Shu-Tao Xia"
    ],
    "abstract": "Safety benchmarks for computer-use agents (CUAs) place the harm either in the intent of the task or on a single screen: a malicious instruction, an injected command, a phishing page. An agent that checks the task and each screen in isolation can pass them, so they do not test whether it combines facts seen on different screens. Yet in delegated work, harm often arises exactly this way: a fact about a person on one screen, a fact about an item on another, and a legitimate task that binds them. We introduce SEAM (Safety Execution Across Multiple screens), a benchmark of such cross-screen compositional harm: 600 multi-step, cross-application OSWorld tasks in which the instruction and every single observation are benign and only their combination is harmful. Minimal-pair variants that differ in one place, scored from the server log rather than by an LLM judge, locate where an agent fails. General-purpose open-weight and flagship agents carry out the harm in up to 92% of runs, yet decline when the user states it in one sentence. Agents open the decisive pages, so exposure is not the primary bottleneck. Asked about those pages, they flag the harm, and with thinking they often write the conflict into their reasoning and confirm anyway. Safety recognition thus does not reliably translate into safe execution, and the translation depends on the information channel: the same warning stops agents far more often in the user's instruction than on screen. Proprietary models are markedly more cautious. We release SEAM with its generator and quality gates at https://yuxuan2003.github.io/SEAM/ .",
    "published": "2026-11-17T15:53:58Z",
    "updated": "2026-11-17T15:53:58Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.22971"
  },
  {
    "id": "2611.22969",
    "title": "Rescaling OLS-Merged Adapters To Improve Personalized Image Generation",
    "authors": [
      "Leander Girrbach",
      "Niklas Schweiger",
      "Zeynep Akata"
    ],
    "abstract": "Merging multiple adapters into a single image generation model reduces deployment costs while preserving diverse task capabilities or personalization modes. State-of-the-art methods such as RegMean, Mix-of-Show, and Subspace Routing fit the outputs of the merged model to those of the individual adapters using ordinary least squares (OLS). We show that this reconstruction objective systematically shrinks task-specific signals whenever the activation distributions of different tasks overlap, producing a merged adapter that is too weak for downstream use. We derive a decomposition that quantifies this shrinkage and propose rescaling the merged update to restore signal strength. On multi-subject personalization with up to 30 merged adapters, rescaling substantially improves subject fidelity over unscaled baselines. Our approach also improves results on style transfer, concept erasure, image classification, and LLM-based text classification.",
    "published": "2026-11-17T15:52:49Z",
    "updated": "2026-11-17T15:52:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.22969"
  },
  {
    "id": "2611.22968",
    "title": "MI-Hyper: Generating Multiple Instance Models for Weight Space Transfer Learning in Histopathology via Mixed Tasks Pretrained HyperNetwork",
    "authors": [
      "Xitong Ling",
      "Yousef Kotp",
      "Weiming Chen",
      "Yining Li",
      "Jiawen Li",
      "Minxi Ouyang",
      "Xinyi Guo",
      "Mingxi Fu",
      "Yizhi Wang",
      "Tian Guan",
      "Lianghui Zhu",
      "Yonghong He"
    ],
    "abstract": "Zero-shot whole-slide image (WSI) prediction aims to generalize to new pathology tasks without parameter updates at deployment. MI-Zero makes these predictions by pooling patch-text similarities. Conditional weight generation, combined with supervision from diverse pathology tasks, offers an alternative: learning to construct predictive rules from task descriptions. We introduce MI-Hyper, a hypernetwork pretrained across mixed tasks to generate the aggregation and classification weights of multiple instance learning (MIL) models. We first train the generator and a shared MIL basis jointly using source labels. We then freeze the basis and refine the generator. The generated task weights are reused across cases. Across 308 tasks from 52 pathology datasets, MI-Hyper improves mean AUC, balanced accuracy and macro-F1 over MI-Zero by 1.85, 1.17 and 0.57 percentage points, respectively. On some molecular prediction tasks, both AUC and balanced accuracy improve by more than 20 points. These results support task-conditioned weight generation as a promising approach to weight-space transfer for long-sequence modeling.",
    "published": "2026-11-17T15:52:19Z",
    "updated": "2026-11-17T15:52:19Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.22968"
  },
  {
    "id": "2611.22967",
    "title": "CodeReel: Accelerating Code-to-Video Agents with Exact Frame Reuse and Blocking-Aware Scheduling",
    "authors": [
      "Junyi Shen",
      "Yao Lu"
    ],
    "abstract": "Coding agents make videos by writing and refining programs in a build--inspect--edit loop. A finished film costs a median of $2.85 in model calls and 11 minutes, over a third of that time in builds that block the agent. We find that much of this time is avoidable, for two reasons. First, 37.5% of the frames of a session's later films were drawn before, many shifted in time or inside an edited scene. Second, half of the builds stop at a check, where the agent needs only the verdict, but which builds stop is unknown until the checks finish. We present CodeReel, a training-free execution layer behind agents' existing commands. Exact frame reuse keys each frame by its drawing commands, regardless of its position in time, and reuses each frame whose key recurs. Blocking-aware scheduling runs the checks first and starts the render alongside them, at idle priority, unless the session's recent builds make a pass unlikely. Scheduling spends CPU to answer sooner and reuse returns it; exact keys let later versions use frames rendered for a failed one as the agent thinks. We introduce EditLoop, a benchmark of replayable agent sessions whose films are checked against renders from scratch. On it, CodeReel cuts the agent's wait by 36.3% against Rebuild, a warm pipeline with parallel rendering, and by 57.9% against Sequential, today's step-by-step pipeline. On time-shifting edits its reuse renders 43.9%, close to the 43.0% whose pixels are new, while Manim-style caching renders 99.8%. With real agents, the median wait per build is 0.62x Rebuild's in Claude Code, on topics never used in development, and 0.67x in Codex CLI. The gain holds for five models and two frameworks.",
    "published": "2026-11-17T15:52:15Z",
    "updated": "2026-11-17T15:52:15Z",
    "categories": [
      "cs.MM",
      "cs.AI",
      "cs.CV",
      "cs.DC"
    ],
    "url": "https://arxiv.org/abs/2611.22967"
  },
  {
    "id": "2611.22965",
    "title": "High-Dimensional Black-Box Optimization via Guidance Sampling of Diffusion Models",
    "authors": [
      "Xiaoyan Hu",
      "Rohit Sonker",
      "Jalal Butt",
      "Jiayu Chen",
      "Egemen Kolemen",
      "Jeff Schneider"
    ],
    "abstract": "Many real-world optimization problems involve optimizing black-box objectives for which only a limited number of evaluations are available. Bayesian optimization (BO) is a powerful framework for such problems, but its effectiveness often deteriorates in high-dimensional spaces. Recent work leverages diffusion models for black-box optimization, often through pre-training a reward-conditioned score network to steer generation towards high-reward samples. Alternatively, gradient-based guidance methods assume access to a differentiable reward function from which guidance gradients are queried. However, these approaches either require large amounts of labeled data for offline training or access to exact reward gradients, limiting their applicability in black-box settings. We propose BReaD (Black-box Reward-guided Sampling of Diffusion Model), a guidance sampling framework for optimizing black-box rewards without assuming access to a labeled dataset or reward gradients. The proposed method uses a Gaussian process (GP) as a differentiable surrogate for the unknown objective and actively queries labels for the generated samples. We provide a theoretical analysis of the total-variation distance between the generated distribution and the target distribution. Using Upper Confidence Bound (UCB) as guidance signals, our method balances exploration and exploitation during generation and enables the discovery of high-reward regions in the data space. Numerical experiments on scientific discovery and image generation tasks demonstrate that our framework can effectively optimize black-box rewards in low-data scenarios.",
    "published": "2026-11-17T15:51:29Z",
    "updated": "2026-11-17T15:51:29Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.22965"
  },
  {
    "id": "2611.22964",
    "title": "Training-Free Building Change Detection with Example-Induced Discriminants",
    "authors": [
      "Zhi Lu",
      "Bin Hong",
      "Zhenming Peng"
    ],
    "abstract": "Building change detection (BCD) relies on dense annotations that are costly to collect across regions. A few annotated examples offer a more economical way to specify the target, but change maps provide incomplete building supervision: they label only changed buildings and leave the building-containing date unspecified. Our key observation is that these annotations nevertheless reveal features that recognize buildings in other images, including unchanged ones. We present Linear INduced Discriminants (LIND), a training-free framework that turns regional feature contrasts into a reusable linear building classifier. Using a single frozen vision transformer, it unifies building recognition and temporal comparison in the same feature space. This approach requires neither text prompts nor an auxiliary segmentation model. Only one parameter is tuned on a single validation dataset and then kept fixed across datasets and shot settings. Extensive experiments demonstrate strong detection accuracy, cross-dataset transfer, and efficient inference, with extensions to other semantic classes and broader land-cover changes. Change annotations thus provide a compact visual specification for detection in new scenes. Code: https://github.com/lzcn/lind",
    "published": "2026-11-17T15:51:05Z",
    "updated": "2026-11-17T15:51:05Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.22964"
  },
  {
    "id": "2611.22962",
    "title": "Hierarchical Diffusion Transformer for End-to-End Image Generation",
    "authors": [
      "Xiaoyu Wu",
      "Yifei Wang",
      "Weihang Guo",
      "Chen Wei",
      "Lydia E Kavraki",
      "Niloofar Mireshghallah",
      "Steven Wu"
    ],
    "abstract": "Pixel-space diffusion learns visual representations and image generation jointly in a single end-to-end training stage, without a separately pretrained visual encoder. However, plain pixel-space Transformers still trail leading two-stage latent diffusion models in generation quality and training efficiency. We hypothesize that part of this gap arises from retaining one token per patch throughout the backbone, which does not explicitly encourage a visual hierarchy that summarizes related content at progressively coarser levels. To address this, we introduce Hierarchical Diffusion Transformers (HiT), which progressively group related tokens and represent each group with a single token. The main Transformer bottleneck processes these compact group tokens, and ungrouping restores features to their original image positions. A compression budget regulates the average compression ratio across the batch, allowing group memberships and counts to vary across images and diffusion timesteps during both training and generation. The model exhibits emergent semantic structure, learning to group coherent objects and object parts without segmentation labels. In text-to-image generation, HiT further learns to group caption words with image patches depicting the same concepts, without region annotations. HiT achieves 1.48 FID on ImageNet $256\\times256$ and reaches comparable generation quality to JiT using approximately 40\\% of its cumulative training FLOPs. For text-to-image generation, HiT exceeds UniLiP's average score across five benchmarks with roughly $6\\times$ fewer denoiser parameters and $3\\times$ fewer forward FLOPs. These results suggest that learning a visual hierarchy within the generator breaks down the barrier to stronger image generation without external visual pretraining.",
    "published": "2026-11-17T15:47:56Z",
    "updated": "2026-11-17T15:47:56Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.22962"
  },
  {
    "id": "2611.22956",
    "title": "Is model self-assessment enough for diverse LVLM ensembles?",
    "authors": [
      "Michael Smith",
      "Frank P. Ferrie"
    ],
    "abstract": "Ensembles of diverse Large Vision Language Models have demonstrated performance beyond that of single models across multiple datasets and tasks. However, the necessary aggregation process usually relies on training, parameter fitting, or complex task-specific pipelines. Furthermore, evaluation is limited, making a fair comparison difficult. We create a unified pipeline where we perform candidate response selection: we build an ensemble by selecting the best answer from a set provided by different models. We comprehensively evaluate across 34 different means of confidence estimation, 24 ensemble configurations, 20 datasets, and two prompt specifications. We show that simple training and parameter-free approaches can be sufficient, even for ensembles of different architectures. These simple self-assessment approaches rely solely on each constituent model's confidence, without explicit calibration, yet are able to perform better than said constituent models. They are also competitive with more involved alternatives on standard metrics such as accuracy, including on open-ended problems. However, we also discover that dataset, ensemble composition, and prompt wording are key confounding variables insufficiently explored by prior work that significantly affect ensemble performance, such that the ensemble can perform worse than its best constituent model. These must be optimized for to get the most out of ensembles, at the cost of limiting their generalizability. We recommend that practitioners consider training-free ensembles only if deployment conditions can be precisely characterized, with Best-of-N configurations of strong models being a good starting point.",
    "published": "2026-11-17T15:43:35Z",
    "updated": "2026-11-17T15:43:35Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.22956"
  },
  {
    "id": "2611.22953",
    "title": "Fiberpose: state-of-the-art fiber morphometry and instance segmentation with a distance-transform neural network",
    "authors": [
      "Viktor A. Balashov",
      "Daniil S. Antonenko"
    ],
    "abstract": "Analysis of fibrous structures in SEM images is a routine task in biomedical engineering and materials science. However, most available methods for fiber quantification still rely on classical image binarization followed by simple post-processing. These approaches often produce unreliable results in images with weak boundaries, heterogeneous contrast, and densely packed fibers. Here, we introduce Fiberpose, a framework that reformulates fiber analysis as direct regression of a smooth distance-transform (DT) field, together with a novel set of geometry-based algorithms specifically adapted to this representation. The predicted field directly encodes fiber geometry, while the accompanying algorithms enable instance reconstruction and measurement of diameter and orientation within a unified workflow. The framework is implemented as a standalone Python desktop application and a web tool https://fiberpose.org. On an independent dataset of fibrous SEM images, Fiberpose achieved state-of-the-art instance-segmentation accuracy in comparison with SAM2 and Cellpose-SAM, and more accurate diameter measurements than DiameterJ, Fibar and GIFT. The method remains effective in dense and weakly contrasted regions and shows qualitative generalization across microscopy modalities not represented in the training data. Fiberpose therefore provides an interpretable geometric representation and an automated pipeline for reproducible quantitative characterization of fibrous materials.",
    "published": "2026-11-17T15:41:46Z",
    "updated": "2026-11-17T15:41:46Z",
    "categories": [
      "cs.CV",
      "q-bio.QM"
    ],
    "url": "https://arxiv.org/abs/2611.22953"
  },
  {
    "id": "2611.22951",
    "title": "A high-dimensional spatial-physical coupling operator for generalizable super-resolution of three-dimensional turbulent flows",
    "authors": [
      "Zengyuan Zuo",
      "Junjun Jiang",
      "Fei Mu",
      "Xubo Wang",
      "Xianming Liu"
    ],
    "abstract": "Accurate representation of turbulent flows requires simultaneously capturing multi-scale spatial structures and the complex, nonlinear coupling between distinct physical quantities (\\textit{e.g.}, velocity components and density). In practice, however, turbulent data are often constrained by low spatial resolution due to hardware limitations and computational costs. While current data-driven super-resolution methods have shown promise by learning mappings via convolutional neural networks (CNNs), they typically treat physical variables as independent channels. This simplified approach neglects intrinsic cross-variable correlations, causing models to struggle with high-fidelity reconstruction, particularly under extremely sparse conditions or in out-of-distribution regimes. To bridge this gap, we propose an architecture-agnostic spatial-physical coupling operator that extends the standard convolution into a joint spatial-variable dimension. Unlike conventional linear channel mixing, our framework constructs a unified spatial-physical representation within CNNs to explicitly capture local inter-variable interactions. By lifting features into a higher-dimensional manifold, this operator significantly enhances the model's representation capacity. Experiments demonstrate that this approach enables strong reconstruction performance and zero-shot generalization, offering a physics-aware inductive bias for super-resolution of three-dimensional turbulence. More broadly, this work suggests that high-dimensional operators offer a promising avenue for modeling intricate multi-scale turbulent flows.",
    "published": "2026-11-17T15:41:02Z",
    "updated": "2026-11-17T15:41:02Z",
    "categories": [
      "physics.flu-dyn",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.22951"
  },
  {
    "id": "2611.21250",
    "title": "Stream of Belief: Eliciting Collective Intelligence through Latent Belief Dynamics",
    "authors": [
      "Yu Yao",
      "Jiayi Dong",
      "Yilun Du"
    ],
    "abstract": "In this work, we view multi-agent reasoning as a process of seeking a collective equilibrium of implicit belief dynamics and introduce Stream of Belief (SoB), where agents maintain continuous latent beliefs and iteratively refine them through communication and reflection. Our method seeks a collective belief state of a multi-agent system where further communication induces no meaningful information propagation. Through extensive experiments, we demonstrate the generalization of SoB across tasks and model families. More Broadly, our results suggest a new perspective on scaling multi-agent reasoning from belief dynamics.",
    "published": "2026-11-16T15:28:04Z",
    "updated": "2026-11-16T15:28:04Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2611.21250"
  },
  {
    "id": "2611.21240",
    "title": "How Developer Personality Shapes the Use of AI Coding Assistants",
    "authors": [
      "Annemarie Wittig",
      "Alina Mailach",
      "Norbert Siegmund"
    ],
    "abstract": "Developers differ in personality traits that shape how they approach software development tasks, yet AI coding assistants either behave uniformly or offer personalization features whose fit with individual developers must be found through trial and error. This is because it remains unclear how personality shapes developers' experiences with AI assistants, and thus which traits personalization should account for. In other words, we provide tools with no underlying theory on what works when and why. We take a first step towards such a theory with a systematic scoping review on how users' personality relates to their perception of LLM-based tools. We identified twelve studies through general search engines, major Software Engineering (SE) venues, AI tooling, and snowballing. They all reported associations between personality and perceptions, particularly perceived usefulness, yet none addressed this in a SE context. Building on these findings, we conducted an exploratory two-wave survey with 29 and 11 developers, collecting first empirical evidence of how developers' personality (measured using the Big Five Model) relates to the perception of AI coding assistants. Higher Extraversion was associated with more positive private-use experiences in both waves, while Agreeableness was associated with negative professional experiences in the first wave and positive ones in the second. These results provide first indications that the personality effects found in the literature extend to developers. Although further studies with bigger samples are needed to build a theory, our work takes the first step towards an empirical grounded theory of developer personality and AI personalization traits.",
    "published": "2026-11-16T15:23:28Z",
    "updated": "2026-11-16T15:23:28Z",
    "categories": [
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.21240"
  },
  {
    "id": "2611.21235",
    "title": "Language-model agents' beliefs can be manipulated via truthful evidence in open channel",
    "authors": [
      "Jinwei Hu",
      "Qisong He",
      "Xinmiao Huang",
      "Youcheng Sun",
      "Yi Dong",
      "Xiaowei Huang"
    ],
    "abstract": "Language-model agents' beliefs can be manipulated through open channels such as social media, even when the information they receive is truthful. When agents fill gaps between fragments with self-induced relationships, they may accept those relationships as established facts and pass the resulting rumours to others. Drawing on cognitive theory of narrative understanding and film theory of montage, we introduce Generative Montage to operationalize this failure, termed narrative overfitting, by coordinating agents to arrange truthful fragments into misleading narratives. Across 1,090 rumour targets from six Twitter events, agents often accepted rumours overconfidently, with overall acceptance exceeding 65 percent in twelve of fourteen models. Acceptance remained above 50 percent after majority voting or review of the same evidence, showing how errors can reach downstream decisions. To explain this susceptibility, fragment interventions identify posts that influence belief within complete narratives. Synthetic controls then show that similar response patterns arise from valid evidence, separating belief influence from evidential support. This distinction motivates Grounded Monitor, a proof-of-concept neuro-symbolic runtime monitor that checks direct evidential support to guide agents' judgements, improving decision accuracy by 5.6 to 29.0 percentage points across original and anonymized settings. These findings expose a cognitive route to rumour amplification and support monitoring inferred relationships before agent-generated conclusions guide public decisions.",
    "published": "2026-11-16T15:20:18Z",
    "updated": "2026-11-16T15:20:18Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.MA",
      "cs.SI"
    ],
    "url": "https://arxiv.org/abs/2611.21235"
  },
  {
    "id": "2611.21233",
    "title": "A Study on Performance Enhancement of a Webcam-Based Real-Time Eye-Tracking System",
    "authors": [
      "Minuk Jung",
      "Kyeonghun Kim",
      "Sooyeon Yoon"
    ],
    "abstract": "This study proposes a real-time gaze-tracking system that uses a standard RGB webcam to estimate screen coordinates. The system combines ETH-XGaze-based gaze estimation with nine-point calibration and polynomial ridge regression. To reduce errors caused by changes in head position, it also applies a conditional residual correction derived from head and pose features extracted with RTMPose. Whether this correction is used depends on the reliability of the detected features and the characteristics of the calibration data. In a preliminary experiment, one participant completed trials at 12 screen targets. The resulting mean screen-coordinate error was 204.24 pixels, which was 35.83% lower than that of xgaze-js and 57.69% lower than that of gaze_tracker. The system produced valid gaze estimates for all 12 targets. These preliminary findings demonstrate the feasibility of combining user-specific calibration with conditional pose-based correction for webcam gaze tracking. Because the evaluation involved only one participant, further experiments with more participants and a wider range of postures are required.",
    "published": "2026-11-16T15:16:55Z",
    "updated": "2026-11-17T10:51:12Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.21233"
  },
  {
    "id": "2611.21232",
    "title": "A Generative AI-Driven Architecture for Whole-Home Intelligent Services: Edge Models, Memory Management, and Household Applications",
    "authors": [
      "Mo Zhou"
    ],
    "abstract": "Generative artificial intelligence is entering the home. Cloud-based assistants face governance limitations in data transmission, continuous availability, and the reliability of physical actions, which are especially salient in households where devices remain online, data accumulate over time, and commands trigger real-world actions. Using the home local server as a unifying organizing axis, this article develops a design-oriented review framework. Sources from arXiv, CNKI, ACL Anthology, and official documentation were searched through November 2026 and coded into five evidence categories: reviews, system prototypes, benchmarks, HCI and eldercare studies, and official documentation. System designs were mapped onto shared architectural modules, identifying nine recurrent responsibilities of the home local server. Generative models support perceptual interpretation, intent understanding, and candidate planning, while deterministic validation, knowledge-graph constraints, and authorization leases confine candidate actions to an inspectable space. Home control, emotional companionship, and intelligent guarding can be compared within a common framework: they share state and memory but differ in latency, false positive and negative rates, proactivity, and permissions. Existing benchmarks rely on virtual environments and cannot substitute for real-deployment evaluation. Local deployment is not inherently safer, and technical continuity alone does not establish the social or medical effects of companionship and guarding. The article proposes a five-dimensional evaluation framework covering architectural capability, system resources, privacy, safety and reliability, and human experience, together with six design principles and a future research agenda for local-first intelligent home systems.",
    "published": "2026-11-16T15:16:17Z",
    "updated": "2026-11-16T15:16:17Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.21232"
  },
  {
    "id": "2611.21229",
    "title": "Investigating the Benefit of Transfer Learning from the Locus Coeruleus for Substantia Nigra Pars Compacta Segmentation",
    "authors": [
      "Tayebeh Bahador",
      "Max Dünnwald",
      "Matthew J. Betts",
      "Emrah Düzel",
      "Steffen Oeltze-Jafra"
    ],
    "abstract": "The substantia nigra pars compacta (SNpc) is a small midbrain nucleus that degenerates early in Parkinson's disease (PD). T1-weighted FLASH MRI enables its visualization and may support early detection of neurodegeneration. However, manual segmentation is difficult and time-consuming, and deep learning models often suffer from the limited availability of labeled data. Transfer learning (TL) may help by adapting pre-trained models to small datasets. We investigate whether TL from a model trained on the locus coeruleus (LC), a nucleus with a similar appearance in this sequence, improves SNpc segmentation. Several TL strategies were evaluated using a 3D U-Net. With as few as 5-14 labeled subjects, TL and training from scratch achieved similar performance, reaching a Dice similarity coefficient of up to 0.77, close to reported inter-rater agreement. No TL strategy differed significantly from training from scratch, suggesting that initialization from the LC offers no significant benefit for SNpc segmentation.",
    "published": "2026-11-16T15:14:01Z",
    "updated": "2026-11-16T15:14:01Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.21229"
  },
  {
    "id": "2611.21223",
    "title": "Oriented Semi-DETR for Semi-Supervised Aerial Object Detection",
    "authors": [
      "Yuqiu Li",
      "Jian Xue",
      "Fan Li",
      "Ke Lu"
    ],
    "abstract": "Semi-supervised object detection has recently been extended to DETR, where oriented boxes introduce an ambiguity that does not arise for axis-aligned boxes: the map from parameters to rectangles is two-to-one, since $(c_x,c_y,w,h,θ)$ and $(c_x,c_y,h,w,θ+π/2)$ denote the same rotated rectangle. Losses and matching costs are computed from the parameters, so two boxes that coincide in space can be far apart in the metric that drives training. A correctly localized student box is then penalized by the regression loss, and the inflated matching cost leads the Gaussian mixture model (GMM) filter to discard it. We propose Oriented Semi-DETR, which removes this ambiguity wherever a pseudo box enters training. Swap-aligned Target Selection regresses towards the encoding closer to the student prediction. A Swap-invariant Reliability Cost minimizes over the two encodings inside the matching cost, so the filter decides on geometry alone. Swap-aware Pseudo-label Denoising starts denoising earlier, ramps its loss weight linearly, and weights each query by the teacher score and encoding margin. All three are parameter-free and require no additional forward pass. Across all label ratios of DOTA-v2.0, Oriented Semi-DETR outperforms DETR-based supervised and semi-supervised baselines, with the largest gains at the strict IoU threshold.",
    "published": "2026-11-16T15:09:55Z",
    "updated": "2026-11-16T15:09:55Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2611.21223"
  },
  {
    "id": "2611.21222",
    "title": "Verifiable Random Sampling of Private Data Without a Trusted Single Party",
    "authors": [
      "Muhammed Karamuk",
      "Mikołaj Glinka",
      "Ruben Wolff"
    ],
    "abstract": "Problem: When a party supports claims about a private dataset by disclosing a sample, auditors cannot tell whether it was drawn at random or \"cherry-picked\" to hide flaws in the rest of the data. Solution: The data holder commits to the hashes of every item in its dataset and registers the commitment with independent servers. Selection then waits on a decentralized randomness beacon: a network that jointly emits a fresh random value every few seconds, outside the control of the data holder and the auditors. The value emitted two beacon rounds after the commitment picks the sample. Each server returns a signed receipt, so anyone can later check that the revealed sample is exactly the one that value prescribes. Selection from the committed set stays unbiased as long as the beacon's threshold holds and one required server is honest, and a pre-agreed name, checked with the servers, stops repeated or abandoned draws. We call this protocol NoCherry. Applications: Any audit that spot-checks a private corpus: private AI benchmarks and held-out test sets, dataset quality claims, code and security audits, test-fairness review, vulnerability handling, and compliance sampling. Auditors need not trust the data holder to hand over a representative sample of the committed data, since the protocol proves it, and data holders need not expose their entire dataset.",
    "published": "2026-11-16T15:09:40Z",
    "updated": "2026-11-16T15:09:40Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.21222"
  },
  {
    "id": "2611.21218",
    "title": "InclusionMed: Benchmarking AI for Inclusive Healthcare",
    "authors": [
      "The InclusionMed Collaboration"
    ],
    "abstract": "Advancing medical AI for inclusive healthcare requires evaluation across diverse healthcare roles, tasks, and care settings, but benchmark coverage remains uneven. We introduce InclusionMed, an open medical AI evaluation initiative for inclusive healthcare. The InclusionMed Atlas organizes benchmarks across three healthcare roles and three AI capabilities. For the first release, we selected four public benchmarks from 388 candidates through structured audits and independent reproduction. With InclusionMed-DxFiles, our private diagnostic reasoning benchmark, the Atlas contains five benchmarks covering three of its nine role--capability cells. We evaluated frontier large language models on the Atlas and aggregated their results into the InclusionMed Index, with overall scores ranging from 17.5 to 49.1 out of 100. The Index also reports scores by healthcare role and AI capability, showing that a model's rank varied with the role or capability considered. A within-benchmark analysis using task-level tags showed that the ten highest-ranked models in the Index all scored higher on patient communication than on clinical decision-making. Models with similar Index scores also differed substantially in estimated inference cost. These findings highlight the need for evaluation covering more diverse healthcare needs and for context-specific model selection. Through open collaboration and community contributions, InclusionMed seeks to ensure that diverse healthcare needs worldwide shape how medical AI progress is defined and measured.",
    "published": "2026-11-16T15:08:25Z",
    "updated": "2026-11-16T15:08:25Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.21218"
  },
  {
    "id": "2611.21178",
    "title": "TRACK: Tool-Augmented Reasoning over Time Series for Fault Diagnosis in Power Management System",
    "authors": [
      "Erkan Bayram",
      "Debanjan Ghosh",
      "Li Zhu",
      "Sambarta Dasgupta"
    ],
    "abstract": "Fault diagnosis in power management systems running multiple loads relies on experts manually inspecting current and voltage waveforms, which fails to scale across deployed units. We present TRACK, which pairs a time series encoder with a Small Language Model to produce structured, physics-grounded diagnostic reports, calling tools for exact, verifiable calculations. It operates on-device, keeping proprietary sensor data local and avoiding expensive API calls. We introduce a rubric-based framework that evaluates these reports by scoring structure, signal fidelity, physics reasoning, diagnosis, and actionability through per-criterion verdicts. On a 15-class multi-load simulated benchmark, TRACK achieves over 95% fault-category accuracy and generalizes to out-of-distribution faults, whereas the best encoder-probing baseline reaches only 58% accuracy.",
    "published": "2026-11-16T14:39:13Z",
    "updated": "2026-11-16T14:39:13Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2611.21178"
  },
  {
    "id": "2611.21177",
    "title": "RAGE: Residual-Adaptive Gating for Flow-Based Image Editing",
    "authors": [
      "Ruofeng Mei",
      "Xiangyu Xu"
    ],
    "abstract": "Recent inversion-free, flow-based image editing methods evolve the source image toward the target via a differential velocity field. We observe that this velocity field does not explicitly account for which regions should be preserved, leading to unintended drift in non-editing regions. To address this, we formulate source fidelity control as a stochastic optimal control problem in which a selective fidelity term on the editing residual is enforced along the editing trajectory. Solving this problem and approximating its solution yields the Residual Gating Principle: each latent component is pulled back toward the source with a gain that decays exponentially with the local residual magnitude, so that small deviations are suppressed while large, semantically meaningful edits pass through unimpeded. The proposed method, RAGE, requires only one lightweight gated interpolation per sampling step, involves no mask estimation, attention maps, retraining, or architecture-specific modifications, and is applied on top of FlowEdit-based editors. On PIE-Bench, RAGE achieves the best overall rank among 17 methods and substantially improves background preservation on both Stable Diffusion 3 and FLUX backbones while maintaining competitive editing quality.",
    "published": "2026-11-16T14:36:53Z",
    "updated": "2026-11-16T14:36:53Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.21177"
  },
  {
    "id": "2611.21176",
    "title": "Scientific Coding with Large Language Models: Evidence from Finite Element Analysis",
    "authors": [
      "Erfan Hamdi",
      "Joel Shor",
      "Emma Lejeune"
    ],
    "abstract": "Large language models (LLMs) offer a potential route to automating scientific programming, but their usefulness depends on consistently producing numerically correct code. We extend FEM-Bench to 17 finite element tasks involving nonlinear and history-dependent mechanics and structural dynamics, and evaluate 15 models on implementation and test generation without execution feedback. The best model succeeds in 87.1% of single-pass implementation trials, but rankings differ between tracks. The leading implementer achieves 49.9% joint test success, while the leading tester reaches 82.6%. For six models, we compare single-pass generation with two agentic harnesses that allow code execution and revision. Agentic execution solves some tasks that never succeeded in single-pass trials and improves consistency on others, but gains vary across models and harnesses, and regressions also occur. Claude Opus 5 with SimpleAgent reaches 96.5% Pass@3, the probability of at least one success in three attempts, but 77.1% Pass$^3$, the probability that all three succeed. No model-harness combination exceeds 78.8% Pass$^3$. To understand why agents submit incorrect code after passing their own checks, we analyze 249 failed agentic trajectories and identify six categories of self-verification failure. The most common are inadequate test coverage (73.1%) and reliance on generic consistency checks (70.3%), and in 28.5% of cases the tests share an error with the implementation. Motivated by these findings, an exploratory configuration with separate coder and tester agents achieves the highest observed scores, with 97.6% Pass@3 and 88.8% Pass$^3$. These results identify consistency across attempts and independent verification as the main obstacles to trusting LLM-generated scientific code.",
    "published": "2026-11-16T14:35:30Z",
    "updated": "2026-11-16T14:35:30Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.CE"
    ],
    "url": "https://arxiv.org/abs/2611.21176"
  },
  {
    "id": "2611.19956",
    "title": "FinVision: Multimodal AI for Visualizing Financial Narratives",
    "authors": [
      "Yixuan Tang",
      "Hui Wang",
      "Yi Yang",
      "Allen H. Huang"
    ],
    "abstract": "Financial narratives contain rich information about firms' performance and business conditions. Conventional text analysis often summarizes this information into numerical representations, which may not fully preserve the dynamic structure described in the narrative. In this study, we develop FinVision, a domain-specific multimodal generative model that translates financial narratives into visual representations of contemporaneous market dynamics. Using 87,940 paired observations of Management Discussion and Analysis (MD&A) disclosures and stock price charts, FinVision learns the average relationship between a firm's narrative account of a fiscal year and its stock-price dynamics over the same period. Given an MD&A alone, the trained model generates a text-implied stock chart, extending financial text analysis beyond numerical representations toward text-to-visual generation. We validate FinVision in two ways. First, held-out tests show that the model generates stock-chart representations that closely resemble observed charts and outperform direct LLM prompting, general-purpose text-to-image models, and the same architecture without financial-domain adaptation. Second, we examine the economic validity of the generated representations by comparing text-implied and observed stock charts. The resulting discrepancy is systematically associated with weaker investor responses around subsequent 10-K filings and with worse subsequent market and operating outcomes. Overall, our findings show how domain-adapted multimodal generative AI can create a new visual representation of financial text and provide an additional modality for studying business communication.",
    "published": "2026-11-15T11:56:36Z",
    "updated": "2026-11-15T11:56:36Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.19956"
  },
  {
    "id": "2611.19955",
    "title": "Equal Dose, Different Coverage:Tracing Rate and Duration in Image Editing",
    "authors": [
      "Yi Liu"
    ],
    "abstract": "Benchmarks for scientific image editing test whether a model draws the outcome of a described process, leaving open which representations carry its errors and whether correcting them yields the right quantity. We study this question with an airbrush of fixed deposition profile, under which exchanging rate and duration preserves the dose and should preserve the endpoint, yet changes the edited coverage. Matched-norm activation patches across text positions and denoising stages show that, in distilled FLUX with Chinese prompts, representations at unchanged text positions (context) carry this discrepancy: early context transfers 3.51 of the 3.98 percentage-point (pp) signed route difference, against 0.09 pp for equal-norm updates at the two changed digits. Early image latents transmit native (unpatched) route differences across two FLUX configurations and OmniGen, while text-position effects depend on configuration. The trace predicts an intervention: share early context between routes while each retains its own digits. On independent English layouts, this reduces the distilled-FLUX absolute route gap from 1.13 to 0.60 pp, outperforms early digit sharing, and improves agreement more than in base FLUX under directly paired tests. Calibrated evaluation, which prescribes an area for each dose, separates this gain from accuracy: sharing the full prompt encoding produces identical route images with target errors of 8-16 pp, and stating the target percentage directly retains a compressed area response. Localization predicts a consistency gain on new layouts, and calibration measures the quantity error that agreement leaves unresolved.",
    "published": "2026-11-15T11:52:41Z",
    "updated": "2026-11-15T11:52:41Z",
    "categories": [
      "eess.IV",
      "cs.AI",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2611.19955"
  },
  {
    "id": "2611.19939",
    "title": "Two-Stage Prompt Learning: A Unified Framework for Person ReID without Clothing Hypothesis",
    "authors": [
      "Yuxuan Xiao",
      "Shanshan Zhang",
      "Shengcai Liao",
      "Jian Yang"
    ],
    "abstract": "Person re-identification (ReID) in real-world scenarios involves three clothes conditions: the same clothes (SC), changed clothes (CC), and the unknown (GEN) scenario where clothes changes are not specified. Existing methods typically train separate SC- or CC-specific models, which limits generalization across all conditions. Meanwhile, pre-trained visual-language models (VLMs) such as CLIP have shown strong generalization ability in various vision tasks, motivating recent ReID methods to incorporate textual prompts. However, to distinguish SC and CC, prior approaches rely on fixed predefined instructions, which lack learnable context embeddings in prompts and cannot effectively handle the GEN scenario. To overcome these limitations, we propose Two-Stage Prompt Learning (TSPL), a unified framework that integrates clothes-identity decoupling and scenario-aware task prompts within VLMs. In Stage 1, appearance-decomposed prompt learning disentangles clothes and identity information under frozen encoders, producing stable embeddings where clothes cues can be selectively preserved or suppressed. In Stage 2, task-aware prompt learning trains the image encoder with learnable context embeddings guided by Stage-1 representations, enabling robust adaptation across SC, CC, and GEN conditions. Extensive experiments on five benchmarks show that TSPL achieves state-of-the-art performance under all scenarios, improving mAP by up to 9.2% on LTCC (SC) and by 6.4% on VC-Clothes (GEN), respectively. The code will be released at https://github.com/YuSuen/TSPL.",
    "published": "2026-11-15T11:13:22Z",
    "updated": "2026-11-15T11:13:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19939"
  },
  {
    "id": "2611.19933",
    "title": "SAGE-VQA: A Training-Free, Self-Evolving Agentic Framework with Grounded Evidence for Knowledge-Based Visual Question Answering",
    "authors": [
      "Ruirui Shen",
      "Jianqi Gao",
      "Xiangfeng Luo",
      "Yonggang Zhang",
      "Muran Yu",
      "Barney Haoyun Miao",
      "Hang Yu",
      "Yike Guo"
    ],
    "abstract": "Knowledge-based visual question answering (KB-VQA) aims to combine visual information with external knowledge to answer user questions. Existing methods face two main bottlenecks: visual perception errors can propagate into hallucinations, and generalization across scenarios remains limited. To address these issues, we propose SAGE-VQA (Self-evolving Agent framework with Grounded Evidence), a training-free agentic framework that combines evidence verification with experience evolution. Our key insight is to explore an Evidence-Driven Adaptive Reasoning (EDAR) strategy. It accurately acquires and verifies question-relevant fine-grained visual information. It also extracts and refines reusable experience to support robust reasoning across tasks. Specifically, we design a Co-verified Visual Grounding module that verifies question-relevant visual information and provides grounded evidence for subsequent reasoning. We further introduce a Self-evolving Hierarchical Memory (SHM) mechanism. SHM organizes experiences into declarative and procedural memories based on their nature. These memories can be reused in subsequent reasoning and continually refined through feedback, without updating model parameters. Experimental results show that our method outperforms competing methods based on lightweight open-source vision-language models (VLMs) as well as those based on closed-source VLMs. Moreover, our method can serve as a plug-and-play reasoning framework for existing VLMs without modifying their architectures.",
    "published": "2026-11-15T11:07:57Z",
    "updated": "2026-11-15T11:07:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19933"
  },
  {
    "id": "2611.19932",
    "title": "From Companion to Guardian: Designing an Emergency Support System Using a Quadruped Robot for Older Adults",
    "authors": [
      "Chunyang Meng",
      "Eduardo B. Sandoval",
      "Josh Andres",
      "Francisco Cruz",
      "Mari Velonaki"
    ],
    "abstract": "As older adults increasingly live alone, emergency support becomes an important function for home companion robots. In Australia, demand for the care and support workforce is projected to nearly double between 2020-21 and 2049-50. Service robots such as robot dogs may support older adults by combining everyday companionship with assistance when human support is not immediately available. We present the design and implementation of a domestic companion-robot system on a Unitree Go1 quadruped platform that combines companionship with emergency awareness and response. The system uses a three-stage interaction model consisting of companion, danger-awareness, and emergency modes. A rule-based escalation policy combines signs detected from visual and speech input to determine the current risk level and adjust how long the robot waits for the user to confirm safety before entering emergency mode. Additional detected signs can shorten this waiting time. Users can confirm safety, request immediate help, stop robot motion, or reset the system. We verified the implemented decision rules and escalation timing through 105 automated trials and 25 staged physical trials. Additional visual evidence shortened the waiting time, and the system entered emergency mode when the waiting time ended without confirmation.",
    "published": "2026-11-15T11:07:02Z",
    "updated": "2026-11-15T11:07:02Z",
    "categories": [
      "cs.RO",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.19932"
  },
  {
    "id": "2611.19931",
    "title": "Does synthetic pre-training pay off on a microcontroller? Accuracy, latency and energy across two MCUs",
    "authors": [
      "Achintya Yadav"
    ],
    "abstract": "Rendered images are cheap to label, but a microcontroller classifier must survive 8-bit integer (INT8) quantisation and compute correctly on the chip. Five models, from MobileNetV2 at 224 px to a 61K-parameter convolutional neural network (CNN), were fine-tuned on a six-class scene dataset with and without a synthetic stage, against thresholds fixed in advance, and deployed on an ESP32-S3 and an RP2040. With full real data the stage gave no detectable gain. For the main deployable model the INT8 difference was +0.312 percentage points (pp), its interval below the +1.6 pp gain recomputed from the source study; quantisation did not detectably change it, nor did model size. With 10% of the real data the stage paid off for the CNN, by +3.438 pp on one seed and +2.715 pp over three; its cause is open. On the ESP32-S3 the main model took 152.7 ms and 16.3 mJ above idle per inference, and adding the stage changed neither beyond preset bounds. The model's INT8 outputs matched TensorFlow Lite's reference kernels exactly, but only after a memory overrun in a vendor kernel was patched. On the RP2040 the same model took 1.80 s and 27.3 mJ above idle, about twelve times slower, and the largest 96 px model exceeded the board's flash-capacity limit. Neither the RP2040 nor the host interpreter used for scoring reproduced the reference arithmetic. A synthetic stage is worth adding only when real data are scarce, and on-device INT8 outputs should be checked against reference kernels, not inferred from host scores.",
    "published": "2026-11-15T11:00:12Z",
    "updated": "2026-11-15T11:00:12Z",
    "categories": [
      "cs.LG",
      "cs.AR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19931"
  },
  {
    "id": "2611.19925",
    "title": "Learning When to Continue and When to Stop: Termination-Aware OPSD",
    "authors": [
      "Chaoqun He",
      "Wannian Yi",
      "Changyi Sun",
      "Chaojun Xiao",
      "Lijie Wen"
    ],
    "abstract": "On-Policy Self-Distillation (OPSD) improves language model reasoning by distilling from a frozen teacher initialized identically to the student and conditioned on privileged information. However, we identify an underexplored termination mismatch in OPSD: the student fails to reliably learn when to continue and when to stop. This mismatch manifests in two opposing failure modes-premature termination, where reasoning stops before sufficient progress is made, and repetition-driven over-generation, where the model continues generating after reasoning has stalled. Our analysis shows that the teacher-student discrepancy on EOS grows during OPSD training, while length-capped trajectories are frequently dominated by unproductive repetition. To address this issue, we propose TA-OPSD (Termination-Aware On-Policy Self-Distillation), which augments the original OPSD objective with two targeted objectives. Stop/Continue Distillation addresses premature termination by explicitly aligning the teacher and student on whether reasoning should continue, while Repetition-Aware Unlikelihood Training addresses repetition-driven over-generation by discouraging repetitive continuations in the student's failed trajectories. The resulting objective improves termination behavior from complementary directions: continuing when further reasoning is needed and stopping when reasoning becomes unproductive. Experiments on mathematical reasoning tasks with Qwen3 (1.7B/4B/8B) show that TA-OPSD consistently outperforms OPSD and other baselines across all three model scales. Beyond the performance gains, ablation and behavioral analyses show that the two proposed objectives effectively mitigate their corresponding termination failures, reducing both premature termination and repetition-driven over-generation.",
    "published": "2026-11-15T10:34:30Z",
    "updated": "2026-11-15T10:34:30Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.19925"
  },
  {
    "id": "2611.19922",
    "title": "Lao Siji: Adapting openpilot to Closed-Loop End-to-End Driving in Neural Reconstruction",
    "authors": [
      "Chengzhi Gao",
      "Yongzhi Liu",
      "Jinchang Xu",
      "Weichao Zhuang",
      "Guodong Yin"
    ],
    "abstract": "We present Lao Siji, an end-to-end driving policy that ranks third in the 2026 NVIDIA AlpaSim E2E Driving Challenge, ahead of most entries built on foundation models. Instead of training from scratch on a general-purpose vision backbone, we adapt openpilot, an open-source L2 production model. We freeze its vision encoder and fine-tune the policy layers with an ego-state adapter and a route memory. On closed-loop rollouts in neural-reconstructed scenes, we supervise the policy with a privileged map teacher for lateral self-correction and a body-extent loss for road and obstacle clearance, while distilling the base model's remaining outputs to retain car following. Ablations show that self-correction samples carry the gain, while the clearance loss substitutes for them where no teacher exists. Longitudinal safety instead rests on the base model's lead-vehicle estimate behind a rule-based speed layer. Longer training, imitating human logs, and human-log speed targets yield either no measurable gain or adverse effects. Without further training, Lao Siji also places among the leaders on HUGSIM and Odyssey. The final training takes only one GPU-hour and shifts the weights by 3.9% from the shipped model. Code will be released after review.",
    "published": "2026-11-15T10:31:28Z",
    "updated": "2026-11-15T10:31:28Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19922"
  },
  {
    "id": "2611.19913",
    "title": "The Vocabulary Tax: Safely Trimming Unused Tokens from LLMs for On-Device Use",
    "authors": [
      "Sattaya Singkul"
    ],
    "abstract": "Open large language models (LLMs) and speech models ship vocabularies of up to 262k tokens, and every user downloads the tables those tokens index (the input embedding, an untied output head and, in recent on-device models, per-layer embeddings), whatever languages they need. We call the bytes in rows a deployment never uses the vocabulary tax and measure it, without downloading weights, for 1,244 generative and speech-recognition models on the Hugging Face Hub. For a Thai and English deployment it is a median 4.4% of model bytes below 0.5B parameters and 2.1% above 8B, and 1.93 GB in Gemma 4 E2B: it falls hardest on the small models that edge devices run. Keeping only the rows of the deployment's writing systems is exact. Keeping the tokens seen in the user's own text removes much more, a median 29.0% below 0.5B, but the usual way of doing it breaks BPE tokenizers: it drops the intermediate tokens that merges build on, so new text is split differently 1.9 times as often as the standard check reports. We repair this with merge closure, at a cost of 5.9% more rows, and add a trim certificate: a Good-Turing estimate, from the trimming text alone, of how much new text the trimmed tokenizer will split differently (correlation 0.996 over 300 settings in 22 languages) and of how much more text a target needs. Without test data our method never exceeds a 2% target, while prior keep rules checked on test data exceed it in 9-13 of 44 settings. On six models of 270M to 3B parameters in 11 languages, trimmed models keep their predictions: where the certificate passes, a median 89.7% of rows is removed and bits per character rise by at most 2.0%. The census, the trimming and the certificate are released as an open Python package, and the per-model tax for 41 languages as an open dataset.",
    "published": "2026-11-15T10:01:37Z",
    "updated": "2026-11-15T10:01:37Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19913"
  },
  {
    "id": "2611.19912",
    "title": "AgenticJevNav: Agentic Object Search and Navigation via Event-Driven Verification",
    "authors": [
      "Shuning Zhang",
      "Shuli Zhang",
      "Yunheng Wang",
      "Wei Lu",
      "Jiaxi Zhang",
      "Yihang Kang",
      "Tao Wang",
      "Xiangyu Chen",
      "Yixiao Feng",
      "Kai Sheng",
      "Renjing Xu"
    ],
    "abstract": "Agentic navigation must maintain goals and adapt actions from incomplete evidence despite execution failures and delayed inference. We present AgenticJevNav, which links goal-directed planning, evidence memory, event-triggered verification, and bounded execution. The Agent plans from RGB, odometry, memory, and feedback, retaining goal ownership while authorizing a bounded action set. Jev reviews structured evidence after blocked/failed execution or two consecutive low-progress segments. Version, freshness, and once-only checks govern decision application. A single executor and independent RGB reflex constrain motion. Goal revisions revoke obsolete requests and actions before replanning. Across six simulated task families, AgenticJevNav achieves 73.33% SR over 60 trials, 21.67 percentage points above the next-best Agent-only aggregate control under differing historical protocols. A real-world GENISOM L1 quadruped deployment achieves 70.0% success over 30 trials, including bounded search reporting. Together, the simulation and physical-robot results demonstrate the effectiveness of the proposed architecture, while remaining failures highlight opportunities to improve grounding, approach planning, and runtime.",
    "published": "2026-11-15T09:56:55Z",
    "updated": "2026-11-15T09:56:55Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19912"
  },
  {
    "id": "2611.19905",
    "title": "HEmIF-Bench: Benchmarking H&E-to-mIF Models BeyondVirtual-StainFidelity",
    "authors": [
      "Fuxian Zhao",
      "Hyokeun Park"
    ],
    "abstract": "Hematoxylin and eosin (H&E)-to-multiplex immunofluorescence (mIF) generators predict spatial protein expression from routine histology, yet pixel-level marker reconstruction does not establish downstream utility. We present HEmIF-Bench, evaluating five frozen generators across eight datasets spanning molecular, cellular, tissue, and patient scales. HEmIF-Bench decouples internal encoder features from generated outputs, benchmarking both against the pathology foundation reference UNI2. Mirroring the clinical workflow where pathologists rely on mIF to define cell phenotypes, delineate tertiary lymphoid structures (TLSs) and germinal centers (GCs), and stratify patient risk, we evaluate external CD3 recovery, single-cell classification, dense nuclear segmentation, TLS/GC segmentation, and patient survival prediction. Across the benchmark, foundation-model-based MIPHEI-ViT leads among the generators, while non-foundation models show task-specific strengths. Comparing the two routes reveals that internal encoder features generally outperform generated outputs, and larger output marker panels do not guarantee stronger downstream utility across datasets. Moreover, neither internal encoder features nor generated outputs consistently surpass frozen UNI2. These findings show that pixel-level stain fidelity does not equate to downstream utility, and that generators trained at current paired-data scales have yet to surpass large-scale pure-H&E foundation models. With the expansion of paired translation cohorts and the advancement of foundation-based generative architectures, HEmIF-Bench establishes a definitive benchmark for tracking when H&E-to-mIF generation crosses the threshold to deliver genuine value beyond routine histology for tumor microenvironment analysis and precision oncology.",
    "published": "2026-11-15T09:34:47Z",
    "updated": "2026-11-15T09:34:47Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19905"
  },
  {
    "id": "2611.19901",
    "title": "Remember, Replay, Adapt: Learning from Past Experience in Online Vision-and-Language Navigation",
    "authors": [
      "Chenhao Ding",
      "Jizhou Han",
      "Lixin Xiu",
      "Muyao Wang",
      "Songlin Dong",
      "Hideki Nakayama"
    ],
    "abstract": "Existing feedback-based methods for online vision-and-language navigation (VLN) primarily learn from current episode outcomes, leaving previously acquired feedback underutilized. Inspired by human episodic memory, we propose R2A, an online VLN adaptation framework that continually reuses successful and failed navigation experiences for policy learning. Specifically, Success-Failure Memory (SFM) retains successful and failed navigation episodes with acquired feedback and retrieves task-relevant experiences based on incoming instructions, enabling historical feedback to guide subsequent navigation. Prior-Anchored Adaptation (PAA) learns from these experiences by reinforcing successful trajectories and suppressing failed ones relative to a frozen pretrained policy, while regularizing behavioral drift. Together, these modules enable continual feedback reuse and stable policy adaptation without source-domain data or expert supervision. Extensive experiments across three benchmarks, REVERIE, R2R, and R2R-CE, and five navigation backbones demonstrate consistent performance gains. On the REVERIE validation unseen split, R2A improves DUET's SR from 46.98% to 69.84% and SPL from 33.73% to 50.98%.",
    "published": "2026-11-15T09:30:18Z",
    "updated": "2026-11-15T09:30:18Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19901"
  },
  {
    "id": "2611.19475",
    "title": "StyleJudge: A Human-Validated, In-Context-Learning Vision-Language Evaluator for Artistic Style Transfer",
    "authors": [
      "Lokesh",
      "Pramukto Mandal",
      "Somanshu Juneja",
      "Jashnoor Singh",
      "Amit Kumar",
      "Pranav Adlinge",
      "Richa Thakur",
      "Kunal Swami",
      "Aditya Nigam"
    ],
    "abstract": "Automatic evaluation of artistic style transfer remains an open problem: existing metrics score an image pair in isolation, without seeing an example of the intended style transformation, and correlate poorly with human judgment. We introduce StyleJudge, a compact vision-language evaluator conditioned on a small set of reference source-to-stylized pairs before scoring a query pair, mirroring how a human rater calibrates to a style before judging a candidate. On a human-annotated benchmark of 878 rated pairs across 12 artistic styles (728 from 10 training/validation styles, 150 from 2 unseen styles), our efficient 0.8B-parameter StyleJudge reaches a Pearson correlation of 0.291 (Spearman 0.325) with human ratings on seen styles and 0.381 on unseen ones. On seen styles, it achieves the highest positive correlation among tested metrics: Gram-matrix style loss and CLIP similarity correlate weakly ($r=0.041$, $r=0.168$), while LPIPS (scored higher when closer to the source) correlates negatively ($r=-0.404$). We achieve this by distilling evaluation knowledge from a 72B-parameter vision-language teacher used only during training, which reaches $r=0.327$, confirming that most of its human alignment survives compact distillation. For training, we build a dataset of source-to-stylized pairs across the 12 styles via LoRA-adapted diffusion, densified with graded intermediate examples from a high-resolution image-morphing pipeline so the evaluator recognizes partial and complete stylization. On two held-out validation styles, StyleJudge reaches 28.2% exact-match agreement with its teacher's structured scores versus 1.1% for the untuned base model, with 67.8% shorter reasoning traces, and scores a pair in 39 s (median) using 2.5 GB of GPU memory on one NVIDIA T4. We release the human-rating benchmark, annotation guideline, SDXL-adapted FreeMorph code, and model weights.",
    "published": "2026-11-14T15:53:14Z",
    "updated": "2026-11-14T15:53:14Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19475"
  },
  {
    "id": "2611.19474",
    "title": "Towards Informed Autonomy Design: Understanding the Interplay of Function Characteristics and Autonomy Preferences in Automotive Agents",
    "authors": [
      "Sebastian Zepf",
      "Annika Stampf",
      "Markus Schuster",
      "Enrico Rukzio",
      "Mark Colley"
    ],
    "abstract": "Proactive, autonomous interactions receive high interest in the field of intelligent assistants, including the automotive domain. A central challenge, however, is identifying appropriate levels of autonomy for different functions while maintaining user acceptance and trust. This work examines how function characteristics relate to suitable autonomy levels and whether these relationships generalize across functions. We conducted an expert workshop to define autonomy levels and identify relevant function characteristics. We then collected data from 126 participants, who rated 14 in-vehicle functions regarding autonomy preferences and function characteristics, from which we trained machine learning models to predict appropriate autonomy levels. Building on our findings, we developed our prototypical Autonomy Design Assistant that supports designers in making autonomy-related decisions, which we evaluated qualitatively with nine experts. Our results suggest that function characteristics can rank functions by their suitable level of autonomy and thereby guide more informed autonomy design decisions, whereas predictions for individual users remain uncertain.",
    "published": "2026-11-14T15:52:11Z",
    "updated": "2026-11-14T15:52:11Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.19474"
  },
  {
    "id": "2611.19472",
    "title": "InvarOrd: Self-Supervised Ordinal Knowledge Distillation with Rank-Invariant Alignment for Label-Efficient Cross-Species Hyperspectral Fish Freshness Assessment",
    "authors": [
      "Kazi Nabiul Alam",
      "Omenuko Joseph Nwebonyi",
      "Pooneh Bagheri Zadeh",
      "Akbar Sheikh-Akbari"
    ],
    "abstract": "Hyperspectral models of fish freshness rarely transfer between species, and labelling a new species is slow and destructive. Freshness is also ordinal, and standard domain alignment can erase that order. We present InvarOrd, which adapts to a new species from 30 labelled cubes (5 per rank) in three stages: self-supervised spectral pretraining on unlabelled source cubes, cross-species alignment by a shrinkage covariance discrepancy computed only within matched ranks, and ordinal distillation into a compact student. The alignment term is provably invariant to the rank means, so it gives no incentive to collapse the ordinal axis. On paired salmon and cod data (800 cubes each, 16 days), a source-trained teacher reaches 1.6 to 1.9 days mean absolute error (MAE) on the other species, with quadratic weighted kappa (QWK) below zero. The 423K-parameter student, 2.54 times smaller than its teacher, attains the lowest MAE (1.476 days) and highest within 1-day accuracy (56.1%) among 14 configurations, matching the best of six ImageNet-pretrained backbones (ConvNeXt-T, 1.503 days) at 66 times fewer parameters, 1.44ms per cube on a GPU and 5s re-adaptation. InvarOrd beats target-only training by 0.29 days (p = 0.031). Among alignment objectives, rank-invariant alignment retains the most ordinal structure (embedding rank correlation 0.183, QWK 0.112), whereas global discrepancy lowers the rank correlation to 0.049 and QWK to zero at only 0.014 days higher MAE.",
    "published": "2026-11-14T15:48:21Z",
    "updated": "2026-11-14T15:48:21Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19472"
  },
  {
    "id": "2611.19465",
    "title": "VAST: Compiling Grounded Vulnerability Scenarios into Verifiable, Multi-Step Environments for Evaluating LLM Red-Team Agents",
    "authors": [
      "Zhen Wan"
    ],
    "abstract": "Evaluating Large Language Model (LLM) security agents requires reproducible environments whose workflow difficulty can be varied and whose failures can be diagnosed. We present VAST (Verifiable Adversarial Scenario Training & Evaluation), a declarative range compiler separating vulnerability scenarios from a compiler-introduced workflow-hardening layer. Following a post-hoc code and AST audit across all topics, the main benchmark retains 109 seed edges (45 with strict upstream CVE annotations), 72 family identifiers (62 under shared-HMAC relay grouping), 81 topic configurations (76 core plus 5 bounded execution models), and 1,387 instances (359 canonical four-gate-revalidated specs plus 1,028 seed variants) in a 42:39 partition. On the TopicServer compiler stratum, a budget-matched 270-episode prompt contrast across 10 compiled mechanism-family clusters (30 P2/P3/P4 instances, 40 turns, temperature 0.0) shows that glm-5.3, grok-4.7, and deepseek-v4-pro solve 12/90 instances under contract_only and 14/90 under generic_hint (cluster sign p=1.00), whereas supplying the shared workflow protocol in full_guide lifts completion to 76/90 (28/30, 23/30, 25/30; cluster sign p<=0.00391). On the separate ranges_v2 ledger, a 126-episode evaluation across 6 non-TopicServer workflows and multi-container Docker/Linux stacks solves 88/126 (69.8%) (28/42, 31/42, 29/42), while an 18-episode intervention on asynchronous Redis worker chaining (v2_02) lifts solves from 0/18 to 18/18 (100%) in 4-6 turns when installed worker modules are disclosed in GET /sched/directory. Finally, a three-seed (s in {42, 1024, 2025}) LoRA recipe comparison on Qwen2.5-Coder-7B-Instruct across 37 lineage-disjoint families (231 episodes on 33 held-out instances) yields 0/33 for Base, 1.67 +/- 2.89 / 33 for Golden SFT, and 4.67 +/- 2.31 / 33 for Header-Recovery SFT, with all solves on v2_03.",
    "published": "2026-11-14T15:40:08Z",
    "updated": "2026-11-14T15:40:08Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19465"
  },
  {
    "id": "2611.19463",
    "title": "Semantics First, Pixels Later: Mission-Driven Event Streams for Drone Video over Bandwidth-Starved Links",
    "authors": [
      "Cong Xu"
    ],
    "abstract": "A surveillance drone on a bandwidth-starved link cannot send the video its operator would need, yet the operator's questions are often not about pixels: did three people converge, when, and where? We study what should cross a link of 1 Mbps down to 1 kbps instead, and in what order. BPS, a behavior-primitive stream, sends semantics first and pixels later: it runs a detector and a tracker onboard and sends short records (25 bytes on average) of multi-frame events selected by a mission card of 16-125 bytes, ahead of positions and pictures. We measure it by what a ground-side language model answers from it, under a preregistered protocol with a held-out set, against H.265 read by the vision fine-tune of the same model, H.265 on which the ground runs our own perception, a stream of quantized tracks, and onboard captions. On the development set (84% of questions about convergence, mostly one location) the event stream answers 74.3% of questions at 0.13 kbps. A reader that receives nothing answers 57.4%, and the video reader 59.6% at 100 kbps and 64.7% on the source frames. When the ground instead runs our perception on the video, video matches the stream at 100 kbps, about 800 times the stream's rate, and falls behind at 64 kbps and below. A track stream matches it at 96 times the bytes and loses 0.03 at 17 times. On held-out data the result is weaker: with events taken from annotated tracks, an oracle, the stream beats H.265 at 100 kbps (+0.13), but with onboard perception it does not (+0.01 [-0.04, +0.06]) and is no better than receiving nothing. Sent alone through emulated links the event records answer 0.739 at 1 Mbps and still 0.724 at 0.3 kbps; an every-frame track stream holds down to 1 kbps and video with ground-side perception down to about 100 kbps. On a Jetson Orin Nano the unchanged pipeline runs at 4.5 fps and misses most events.",
    "published": "2026-11-14T15:35:15Z",
    "updated": "2026-11-14T15:35:15Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19463"
  },
  {
    "id": "2611.19461",
    "title": "Program Distillation: Transferring LLM Capability from System 2 to System 0",
    "authors": [
      "Pujun Zheng",
      "Wanying Ren",
      "Guoxiu He"
    ],
    "abstract": "Recent studies leverage large language models (LLMs) to construct executable programs through environment interaction, feedback analysis, and code revision. However, prior work has mainly treated LLMs as optimizers, overlooking their ability to transfer knowledge across system levels. We propose Program Distillation (PD), a framework that formalizes the transfer of abilities from System 2 to System 0. During learning, the LLM provides task knowledge and draft strategies; at deployment, a student program executes the resulting policy. We show that this approach can improve performance while reducing inference time. We introduce PDBench, a benchmark comprising 27 discrete- and continuous-control tasks with fixed initial policies, and PDMetaHarness, a model-harness-independent meta-system for monitoring and guiding the learning process. The strongest model achieves a normalized mean score of 0.728, surpassing PPO (0.656) and Jev-like decision models (0.239), while running exclusively on CPUs and reducing inference costs. Our analysis shows that performance is largely driven by the first breakthrough during learning, and structural modifications have a slightly lower success rate than parameter modifications but typically yield larger gains. We further introduce style distillation, which enables interpretable stylistic control over the learning process. Overall, we present an analytical framework for PD and demonstrate its practical viability.",
    "published": "2026-11-14T15:33:27Z",
    "updated": "2026-11-14T15:33:27Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19461"
  },
  {
    "id": "2611.19448",
    "title": "CLEW: Log-Anchored Backward Tracing for Root-Cause Code Localization",
    "authors": [
      "Wenji Bai",
      "Muhammad Waseem",
      "Jaakko Peltonen",
      "Pekka Abrahamsson"
    ],
    "abstract": "Failures in industrial software systems may involve multiple components and be difficult to reproduce outside the production environment. Root-cause code localization therefore often relies on issue descriptions and runtime logs. However, log evidence may be noisy or incomplete, and the code reporting a symptom may differ from the code containing the underlying defect. These conditions make it challenging to identify relevant log evidence and determine which functions could have caused the reported failure. To address this gap, we introduce CLEW, an agentic approach that combines rule-based log-to-code anchoring with LLM-guided backward code tracing. CLEW organizes selected observations into diagnostic states, guides source exploration from anchored symptom functions, and returns ranked candidate functions, an affected module, and an explanation comprising a proposed mechanism path and associated log events. For evaluation, we construct LogLoc, a benchmark comprising 192 real-world issue and fault-injection cases. Against three baselines, CLEW records the highest observed Acc@1 (77.3%) and MRR (81.3%) on LogLoc-Issues and matches the leading baselines at 97.6% Acc@1 on LogLoc-Airflow. Averaged over all 192 cases, CLEW's wall-clock time is approximately 73% lower than LocAgent's at a similar average inference cost. No aggregate degradation is observed under the tested perturbations, with modest changes in Acc@1 and MRR across the evaluated seeds and base models. These results suggest that CLEW can combine function-level localization with evidence links and runtime efficiency under the evaluated conditions.",
    "published": "2026-11-14T15:10:10Z",
    "updated": "2026-11-14T15:10:10Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19448"
  },
  {
    "id": "2611.19440",
    "title": "Few-Shot Visual Concept Extraction for Steering Diffusion Transformers",
    "authors": [
      "Nabyl Quignon",
      "Antitza Dantcheva"
    ],
    "abstract": "Image steering aims to provide fine-grained control over concepts in generated images, enabling targeted and continuous manipulation without broadly altering the generation process. Recent steering methods for diffusion models primarily focus on the text-conditioning space or rely on costly auxiliary training. Deviating from that, we here propose a novel steering approach that extracts visual concept directions directly from the image-side activations of Diffusion Transformers. Specifically, we showcase few-shot concept extraction in the activation space using a simple difference-of-means estimator over intermediate residuals. We observe (a) scene-level concepts such as lighting, weather, and style are distributed across image tokens, as well as (b) local concepts such as object colors, textures, materials, and facial attributes are concentrated in specific regions. Towards controlling both concepts, we introduce a new unified training-free framework that uses global difference-of-means for (a) distributed concepts and masked difference-of-means for (b) local concepts, preventing local signals from being diluted by global averaging. Notably, using only a handful of positive and negative prompt pairs, our method identifies and extracts reusable concept directions that can be injected at inference for continuous steering. Quantitatively, our method outperforms text-encoder steering and training-free activation-editing baselines, as well as is competitive with specialized editing models. Our results suggest that as concept directions can be applied at patch level, our method enables precise targeted and compositional steering, manipulating multiple concepts in the same image.",
    "published": "2026-11-14T14:52:19Z",
    "updated": "2026-11-14T14:52:19Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.19440"
  },
  {
    "id": "2611.19439",
    "title": "Do Rule-Based Tools Help LLMs Translate Endangered Uralic Languages in the Prompt or over MCP?",
    "authors": [
      "Iaroslav Chelombitko",
      "Mika Hämäläinen"
    ],
    "abstract": "Komi-Zyrian, Moksha, Erzya and Udmurt have mature rule-based resources, among them finite-state analysers, constraint grammars and bilingual dictionaries, which language models do not use. We ask whether giving a model access to these resources improves machine translation from the four languages into English, and whether it matters how the access is provided: as analyses computed in advance and written into the prompt, or as tools that the model calls itself through the Model Context Protocol (MCP). We evaluate manually: an expert linguist read every English output of the strongest model under three conditions, 816 sentences in all, accepted or rejected each one, and named the main error in every rejected translation. With the analyses in the prompt, the number of accepted translations rises from 13 to 43 out of 272; with the tools attached it rises to 55. The gain comes from the bilingual dictionary. For Udmurt, whose dictionary has no English side, the prompt-based condition brings no gain at all, while for the other three languages an English gloss reaches the prompt for 74 to 80% of the source words. Tool calling is also much harder to get working than prompt injection. Of 31 open-weight models, 14 never call a tool, 11 of them because they cannot produce a usable call, and half of the calls that are made name a language the toolkit does not support. We release the data set, every model output and all tool-call logs.",
    "published": "2026-11-14T14:50:16Z",
    "updated": "2026-11-14T14:50:16Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.19439"
  },
  {
    "id": "2611.19435",
    "title": "Security Authentication as Protective Friction: Understanding the Dual Effects of Authentication Measures in e-Government Platform",
    "authors": [
      "Jianshan Pan",
      "Zongyi Chen",
      "Qiyou Lin",
      "Xiaofang Cai"
    ],
    "abstract": "E-Government platforms, such as government credit platforms, handle highly sensitive personal data, requiring stringent security authentication (e.g., facial recognition, multi-factor verification) that protects users but impedes their experience. Drawing on Tomalin's (2023) e-friction typology and the emerging literature on beneficial design friction, we reconceptualize these authentication measures as protective friction, a theoretically distinct form of non-elective, overt, impeding e-friction that serves a security-enhancing function. We propose a dual-pathway model in which protective friction simultaneously reduces privacy-security risk perception (protection pathway) and increases effort cost (cost pathway), with self-efficacy moderating only the risk pathway. This differential pattern suggests that what matters is not users' ability to overcome friction, but their comprehension of its protective purpose, a construct we term protective mechanism comprehension. We outline a mixed-methods research design combining a survey of platform users and semi-structured interviews with platform staff at a Chinese municipal credit center to test this model. This research-in-progress contributes to IS theory by extending e-friction research from conceptual typology to empirical investigation, identifying when security friction becomes beneficial rather than burdensome.",
    "published": "2026-11-14T14:39:45Z",
    "updated": "2026-11-14T14:39:45Z",
    "categories": [
      "cs.CR",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.19435"
  },
  {
    "id": "2611.19429",
    "title": "Prepare Lighter and Faster for Open-Vocabulary Queries: A Query-Wise 3D Segmenter for Gaussian Splatting",
    "authors": [
      "Nhat-Quynh Le-Pham",
      "Khoi Nguyen",
      "Binh-Son Hua"
    ],
    "abstract": "Open-vocabulary 3D understanding aims to localize and segment arbitrary objects beyond predefined categories. However, existing approaches based on Gaussian Splatting often rely on expensive preprocessing and lengthy training, limiting their applicability when fast and lightweight solutions are desired. We propose a lightweight, training-free framework for query-driven 3D instance segmentation on Gaussian Splatting. Instead of conventional mask-wise CLIP embeddings, we use dense pixel-level CLIP features to preserve fine-grained semantic information and enable flexible text-driven localization without relying on predefined instance proposals. Given a text query, we identify a high-quality target region in a carefully selected pivot view and propagate it across views using a video segmentor, providing consistent and comprehensive coverage of the target instance. We then lift the resulting 2D tracklets to 3D Gaussians through a novel visibility voting strategy, yielding accurate 3D segmentation masks with clean object boundaries. Extensive experiments demonstrate state-of-the-art performance on LERF-OVS, ScanNet, and ScanNet++, competitive results on 3D-OVS, and significant speedups over existing open-vocabulary 3D segmentation methods. These results highlight the effectiveness of our framework for efficient open-vocabulary 3D understanding without per-scene training.",
    "published": "2026-11-14T14:24:34Z",
    "updated": "2026-11-14T14:24:34Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2611.19429"
  },
  {
    "id": "2611.19427",
    "title": "Memorization Lives in a Few Attention Heads: Mitigating Memorization in Diffusion Models via Projection-Based Suppression",
    "authors": [
      "Puwei Lian",
      "Yujun Cai",
      "Songze Li",
      "Yuezu Lv",
      "Guanghui Wen"
    ],
    "abstract": "Diffusion models can memorize and reproduce training samples during inference, raising serious privacy and copyright concerns. Existing inference-time mitigation methods often suppress conditional information globally, which may reduce memorization but can also harm semantic alignment and image quality. In this paper, we revisit memorization from the perspective of cross-attention heads. Through systematic analysis and targeted ablation, we find that memorization is mainly driven by a small subset of shallow-layer attention heads with abnormally strong semantic control, rather than by the entire cross-attention mechanism. Motivated by this finding, we propose Projection-based Top-k Attention Head Suppression, a targeted inference-time mitigation method. Our method first identifies the top-k attention heads most related to memorization using a semantic-control score, and then removes their condition-specific components through directional projection between conditional and unconditional representations. This design selectively weakens memorization-related features while preserving useful semantic information. Extensive experiments on different diffusion models and datasets show that our method effectively reduces memorization and achieves a better trade-off between memorization mitigation and image quality than existing approaches.",
    "published": "2026-11-14T14:22:32Z",
    "updated": "2026-11-14T14:22:32Z",
    "categories": [
      "cs.CV",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2611.19427"
  },
  {
    "id": "2611.18350",
    "title": "MaskSCD: Bitemporal Mask Classification for Semantic Change Detection in Remote Sensing Images",
    "authors": [
      "Weikang Yu",
      "Pedram Ghamisi"
    ],
    "abstract": "Semantic change detection (SCD) identifies where the land surface has changed and which land-cover transition has taken place. Most deep SCD networks predict the change map and the land-cover map of each date with separate per-pixel decoders. These outputs need not agree, so a pixel can be labeled as changed although it has the same class at both dates, and per-pixel decisions fragment objects. We present MaskSCD, which formulates SCD as the mask classification of a bitemporal label-pair image. Each bitemporal segment, a region of constant land-cover class pair, is predicted as one mask shared by both dates together with one class per date, and the change map is derived from the predicted class pair. This formulation keeps the change and semantic maps consistent and the label space linear in the number of classes. A bitemporal masked-attention transformer decoder implements it by reading each segment in both images and relating the two readings, and a bitemporal fusion pyramid provides per-date and change-aware features. MaskSCD is evaluated on SECOND, Landsat-SCD and Hi-UCD, which span 0.1 to 30 m resolution and four to nine land-cover classes, against fourteen recent SCD models re-trained under one protocol. MaskSCD achieves the best separated kappa, semantic change $F_1$ and transition $F_1$ on all three datasets and exceeds the strongest competitor by about five points in mean separated kappa. It produces no contradictory change pixels, which account for nearly 30% of the predicted change of some multi-task networks. The code is available at https://github.com/EricYu97/MaskSCD.",
    "published": "2026-11-13T15:58:38Z",
    "updated": "2026-11-13T15:58:38Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.18350"
  },
  {
    "id": "2611.18346",
    "title": "VLAN: Vision-Language Accessible Navigation",
    "authors": [
      "Jie Hu",
      "Yu Zheng",
      "Wenzhi Wu",
      "Weixing Feng",
      "Cunlei Cheng",
      "Jiaming Zhang"
    ],
    "abstract": "Accessible mobility is user-conditioned rather than scene-intrinsic, as walkable paths for one embodiment are inaccessible to another. Yet, existing benchmarks evaluate traversability under a fixed and limited embodiment. We present Vision-Language Accessible Navigation (VLAN), containing 1,000 scenes, 20K navigation trajectories, and 160K keyframes across diverse lighting, environmental conditions, scene semantics, and path geometries. For each trajectory, VLAN provides embodiment-specific actions and accessibility features for legged and wheeled agents, including humanoid and quadruped robots and people with visual or mobility impairments, while everyday obstacles and accessibility labels are categorized as Passable, Bypass, HighRisk, and Blocked. Unlike goal-only evaluation, our benchmark measures physical safety and alignment with user-specific constraints via goal-reaching, collision-aware, and accessibility-aligned metrics. We benchmark modern vision-language models and find they often fail to consistently adapt obstacle relevance, path selection, and safety criteria across user profiles, suggesting accessibility-aware navigation requires dedicated datasets, tasks, and metrics beyond conventional embodied navigation evaluation. All data and code open-source at https://github.com/InSAI-Lab/VLAN.",
    "published": "2026-11-13T15:54:23Z",
    "updated": "2026-11-13T15:54:23Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.18346"
  },
  {
    "id": "2611.18340",
    "title": "DIRT: Depth-completed Image-based Rendering using Two-band Blending for Live Novel-view Synthesis",
    "authors": [
      "Mathias Harrer",
      "Laura Fink",
      "Noah Lewis",
      "Paul Himmler",
      "Tim Weyrich"
    ],
    "abstract": "State-of-the-art novel-view synthesis (NVS) methods commonly require per-scene optimization before rendering, limiting their applicability in live settings. Live or ad-hoc NVS, however, demands low-latency rendering during capture and strong generalization to new scenes. Some previous work tried to address this task by adapting training- and optimization-based methods, trading quality for low latency. We introduce a live NVS approach following traditional image-based rendering that operates on a posed set of depth sensor observations and images. Our method leverages explicit, sparse point-based geometry obtained from active sensors, resulting in a sparsely filled depth buffer that is completed in the (novel) target view's screen-space. Using this proxy, a posed set of images is projected into the target frame before fusing the resulting observations through a frequency-aware two-band blending strategy. The pipeline is entirely non-neural and optimization-free, requiring no training data or scene-specific optimization. As a result, our approach reduces the delay between capture and novel-view rendering and does not rely on favorable network generalization. We validate the method's applicability to heterogeneous sensor setups - including handheld RGB-D cameras, automotive LiDAR, and thermal cameras - as well as challenging scenarios, such as low light captures. Our experiments demonstrate that the approach outperforms prior methods in live reconstruction scenarios, while maintaining competitive performance in conventional NVS benchmarks.",
    "published": "2026-11-13T15:52:43Z",
    "updated": "2026-11-13T15:52:43Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2611.18340"
  },
  {
    "id": "2611.18330",
    "title": "Marimba: A System One Model for Speech",
    "authors": [
      "Solano Amadori"
    ],
    "abstract": "Speech applications require decisions about term presence, turn completion, and language within an audio window. We present Marimba, an interface for typed speech decisions built on frozen Qwen3-ASR 0.6B features. Lexical questions use zero-shot scoring of ASR transcripts; non-lexical questions use a question-conditioned head and a separate layer-18 turn-end readout. Language identification uses the ASR model's own language scores. On private conversational test sets, decoder AUROC is 0.80-0.92; on public read speech it is 0.92-0.97. Speech Commands four-way accuracy is 0.93; binary lexical ECE is at most 0.08. Personal-information detection, which passes the greedy transcript to a private, curated PII pipeline, reaches item-level F1 0.904 on synthetic Brazilian Portuguese speech (1.000 on reference transcripts). Layer-12 speaker readouts detect speaker change with AUROC 0.966-0.980 on AMI and VoxConverse, above an ECAPA baseline, and count speakers (0, 1, 2, or 3+) more accurately than pyannote 3.1. The turn-end readout reaches AUROC 0.930 versus Smart Turn v3.2 at 0.982 on Smart Turn's own test set. On a subset of ICSI meetings labeled by next speaker, AUROC is 0.716 versus 0.712; the paired confidence interval includes zero.",
    "published": "2026-11-13T15:44:18Z",
    "updated": "2026-11-13T15:44:18Z",
    "categories": [
      "eess.AS",
      "cs.AI",
      "cs.CL",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2611.18330"
  },
  {
    "id": "2611.18324",
    "title": "Unlocking Cross-Attention in Label-Scarce Regimes: A Weakly Supervised Approach for Video Semantic Segmentation",
    "authors": [
      "Andrea Marelli",
      "Alessandro Ardenghi",
      "Giacomo Boracchi",
      "Luca Magri"
    ],
    "abstract": "Weakly Supervised Video Semantic Segmentation (WS-VSS) aims to learn temporally consistent semantic object masks in videos using only video-level labels. While fully supervised models successfully learn temporal relationships by means of cross-attention, training these temporal weights under weak supervision is unstable and even pushes the model below its single-frame baseline. Therefore, existing WS-VSS methods exploit temporal consistency by relying on external priors, such as optical flow. Unfortunately these cues are non-semantic, computationally expensive and noisy, degrading the supervisory signal. Instead of supervising attention weights directly or using external priors, we propose MemCAM, a WS-VSS transformer framework that learns temporal cross-attention directly through feature-space self-supervision. MemCAM introduces a CAM Propagation Algorithm that synthesizes a supervisory signal by propagating past CAMs according to patch-level feature similarities in the latent space. Specifically, we constrain their induced CAMs through a consistency objective between predicted and propagated maps, stabilizing temporal attention learning. Experiments on the YouTube-Objects v2.2 and WS$^2$ datasets demonstrate that MemCAM consistently outperforms the temporal localization and segmentation performance of WS-VSS alternatives, showing that cross-attention can be effectively trained in label-scarce video settings through internal self-supervision.",
    "published": "2026-11-13T15:38:33Z",
    "updated": "2026-11-13T15:38:33Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.18324"
  },
  {
    "id": "2611.18321",
    "title": "Causal AI-Driven Secure mmWave Beam Alignment with Defensive Variational Autoencoders",
    "authors": [
      "Nasir Khan",
      "Asmaa Abdallah",
      "Abdulkadir Celik",
      "Ahmed M. Eltawil",
      "Sinem Coleri",
      "Cicek Cavdar"
    ],
    "abstract": "Efficient and secure beam alignment is essential for mmWave communication systems. However, existing deep learning (DL)-based beam alignment methods often neglect causal relationships between inputs and outputs, resulting in limited interpretability, poor generalization, and excessive beam sweeping. Moreover, these DL solutions are vulnerable to adversarial attacks, where small perturbations in received power measurements can mislead beam classifiers. To overcome these issues, we propose a causally-aware DL framework integrating causal discovery into beam alignment. A two-stage causal beam selection algorithm learns a Bayesian graph capturing dependencies between received signal strength indicators (RSSI) as inputs and the optimal beam index as the target variable, then uses it to select a minimal set of relevant input features for the DL classifier. To mitigate adversarial attacks, we introduce a defensive variational autoencoder (DVAE) that maps potentially perturbed inputs back to their clean versions. End-to-end fine-tuning of the downstream beam classifier on the DVAE-reconstructed RSSI representations further boosts prediction accuracy. Simulation results show that causal beam selection achieves accuracy comparable to conventional methods while providing an \\(\\mathbf{829\\times}\\) lower per-sample computational cost than SHAP (Shapley Additive Explanations), a widely used explainable AI (XAI)-based feature selection method. It further reduces beam-sweeping overhead by \\(\\mathbf{59.4\\%}\\) and \\(\\mathbf{89.8\\%}\\), compared to conventional DL-based beam selection and exhaustive search, respectively. The DVAE-based defense effectively denoises adversarial inputs, sustaining 85\\% accuracy across different perturbation bounds, retains baseline performance on unperturbed RSSI inputs and surpasses defensive distillation defense scheme by 15--20\\% on average under different attack scenarios.",
    "published": "2026-11-13T15:34:32Z",
    "updated": "2026-11-13T15:34:32Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.18321"
  },
  {
    "id": "2611.18315",
    "title": "Experts Across Schemas: Agent-Guided Mixture-of-Relational-Experts for Cross-Database Generalization",
    "authors": [
      "Hiren Madhu",
      "Sukanta Ganguly",
      "Kiran Srinivasan",
      "Smita Krishnaswamy",
      "Rex Ying"
    ],
    "abstract": "Web platforms record user and item activity in relational databases whose schemas differ from platform to platform, which makes it difficult to transfer predictive models between them. Relational foundation models address this through cross-database pretraining, yet recent improvements have relied on increasingly large pretraining corpora. We ask whether a better architecture, together with features specific to the target database, can deliver comparable gains from far less pretraining data. We introduce MoREGT, a mixture-of-relational-experts graph transformer that represents both rows and cells as tokens, adds the log-ages of rows and the names of foreign-key relationships to attention, and routes cells and rows to experts by column metadata rather than by values. A label-blind LLM agent complements the model: it reads the target database's schema and column statistics and adds validated single-row derived columns, without access to labels or model scores. On 21 RelBench tasks with leave-one-database-out pretraining on six databases, the MoREGT backbone improves on the Relational Transformer pretrained on the same databases by 2.25 points of mean AUROC and 5.83 points of mean nMAE. The agent's columns raise mean AUROC from 78.45 to 79.63 and lower mean nMAE from 27.91 to 26.98, the highest means on both metrics among the compared methods, including RT-J, which pretrains on about 400 times as many databases.",
    "published": "2026-11-13T15:32:09Z",
    "updated": "2026-11-13T15:32:09Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.18315"
  },
  {
    "id": "2611.18307",
    "title": "AI for Parameter Selection in Sample-based Quantum Diagonalization",
    "authors": [
      "Doriela Grabocka",
      "Dimitrios Christofidellis",
      "Federico Zipoli",
      "Anna van Elst",
      "Patrick Ruch",
      "Antonio Foncubierta-Rodríguez",
      "Siddhartha Mishra",
      "Matteo Manica"
    ],
    "abstract": "Sample-based Quantum Diagonalization (SQD) methods provide a way to compute molecular ground-state energies, but their accuracy and runtime depend sensitively on configuration choices such as the subspace dimension, propagation timestep, and the allocation of a fixed sampling budget across circuits, for which no formal selection method exists. In this work, we explore whether oracle models can predict the quantum runtime and approximation error from the Hamiltonian and the candidate configuration. Using synthetic Hamiltonians with controllable spectral properties, we show that machine-learned models can map a Hamiltonian directly to the best-ranked configuration within a predefined grid for the SKQD algorithm, validated against classical Krylov propagation, achieving strong rank correlations between true and predicted error and runtime, Spearman $ρ= 0.969$ and $ρ= 0.905$, respectively. Extending the approach to 50 molecular Hamiltonians (20-50 qubits), with reference ground-state energies from classical calculations, we train regressors that predict the simulation error and runtime for a given molecule--configuration pair ahead of execution, and classifiers to distinguish, from 600 SqDRIFT quantum-hardware runs, whether a configuration achieves a ground-state energy within chemical accuracy ($1.6\\times10^{-3}$ Ha $\\approx 1$ kcal/mol). For the molecular Hamiltonians, the models additionally provide an a priori feasibility and resource estimate, predicting whether a molecule can reach chemical accuracy on current hardware and at what runtime, thus correctly classifying held-out molecules at the molecule level, achieving balanced accuracy 61.8% in-distribution and 100% for five larger held-out molecules.",
    "published": "2026-11-13T15:27:18Z",
    "updated": "2026-11-13T15:27:18Z",
    "categories": [
      "physics.chem-ph",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.18307"
  },
  {
    "id": "2611.18297",
    "title": "When evaluation becomes intervention in clinical AI",
    "authors": [
      "Anthony Abou Mrad",
      "Aviona Conti",
      "Samuel Schmidgall",
      "Jayanth Pratap",
      "Ruhika Iyer",
      "Joseph Kim",
      "King Shi",
      "Yann Sakref",
      "Luis M. Ahumada",
      "Lisa Knowlton",
      "Andrew M. Cameron",
      "Khyzer Aziz",
      "Jeffrey K. Jopling"
    ],
    "abstract": "AI judges, models that grade another system's output against a rubric, extend clinical review to the scale at which clinical AI writes. When teams use judge assessments to select a prompt or train a model, the judge becomes part of the intervention. Selection can then favor errors the judge overlooks. We describe what a judge's report must contain and the independent clinical test each judge-driven change needs.",
    "published": "2026-11-13T15:21:50Z",
    "updated": "2026-11-13T15:21:50Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2611.18297"
  },
  {
    "id": "2611.18293",
    "title": "PrivacyPR: A Dataset of Real-World Privacy Fixes for Benchmarking Privacy-Aware Code Review",
    "authors": [
      "Hua Yang",
      "Aditya Bhardwaj",
      "Shidong Pan",
      "Bowen Xu"
    ],
    "abstract": "Coding agents increasingly review code, yet whether they catch the privacy defects that laws such as the GDPR require software to avoid remains largely untested, partly because few datasets connect real privacy defects to their accepted fixes and review context. We present PrivacyPR, a dataset of 4,131 merged GitHub pull requests (PRs) from 1,469 repositories, created between June 2018 and January 2024. Each PR includes its commits, diffs, review discussion, and LLM-generated labels for privacy relevance, fix type, and GDPR principles. PrivacyPR provides 1,169 high-confidence privacy fixes and 1,643 non-fix PRs, together with Verified, a manually checked split of 250 privacy fixes and 250 non-fix PRs, and Small, a 100 + 100 subset for evaluation. On Verified, both annotators endorsed 72% of the LLM's GDPR-principle assignments. Beyond supporting empirical study of how privacy defects arise and are fixed, PrivacyPR provides a benchmark for privacy-aware code review on real, developer-accepted fixes. Its evaluation harness reverts each fix to reintroduce the defect. On Small, two coding agents detect only 42-51% of defects under a generic review prompt, but 88-91% when explicitly asked to check privacy, while flagging 11-15% of non-fix PRs. These results show that privacy defects can be detected by coding agents, but that detection depends strongly on review intent and comes with false alarms. Data, code, reviews, judge verdicts, and an extensible evaluation harness are publicly available at https://doi.org/10.5281/zenodo.23744765.",
    "published": "2026-11-13T15:18:33Z",
    "updated": "2026-11-13T15:18:33Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.18293"
  },
  {
    "id": "2611.18284",
    "title": "Clean Tickets, Wrong Orders: Catching Silent Errors with a Language Model in Your Browser Tab",
    "authors": [
      "Umar Ahmed",
      "Maxim Dunaev",
      "Mohammad Nour Al Awad",
      "Sergey Ivanov",
      "Ivan Khodnenko"
    ],
    "abstract": "A small language model that turns a typed order into structure can fail in two ways. It can print something broken, which any system rejects. Or it can print a clean, well formed order that nobody placed. Our companion work calls the second kind a silent error, and it is the dangerous one. We present a web demo in which a fine-tuned 0.8B parameter model runs entirely inside the visitor's browser tab, through llama.cpp compiled to WebAssembly. No order text leaves the device. The page parses orders as the visitor types, scores every ticket with the PIZZA benchmark's own matcher ported to TypeScript, refuses anything off the menu with \"?\" so the model can face the open web, and lets visitors hunt for silent errors or try to cause one. Run in the browser on all 1,357 PIZZA test orders, the deployed model writes the same output as the server evaluation for 99.0% of them and reaches the same exact match (0.882); we also report its latency on 3 consumer laptops. Demo: https://wrong.cuyor.com",
    "published": "2026-11-13T15:13:47Z",
    "updated": "2026-11-13T15:13:47Z",
    "categories": [
      "cs.LG",
      "cs.CL",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.18284"
  },
  {
    "id": "2611.18274",
    "title": "Right Token, Right Time: From Per-Token Gating to Trajectory-Aware Activation Steering",
    "authors": [
      "Nima Eshraghi",
      "Lovedeep Gondara",
      "Sagarika Suresh",
      "Xiaotong Xu",
      "Jithin Pradeep",
      "Fanny Chevalier"
    ],
    "abstract": "Activation steering via sparse autoencoders (SAEs) enables behavioral control of large language models without task-specific fine-tuning. Yet, standard methods apply the steering signal at every generated token, displacing representations from the distribution the model was trained on and eroding generation quality. We show that \\emph{when} along a generation the intervention is applied is a decisive axis of control. We cast steering as a per-token allocation problem under a fixed budget of steerable tokens, so that methods differ only in which tokens they select, making allocation the sole variable. Within this framework we introduce two gates. The first, Contrastive Feature Projection (CFP), is memoryless and selects the tokens least aligned with the target behavior through a sparse, interpretable feature projection. The second, Closed-Loop Adaptive Bernoulli Steering (CLABS), is trajectory aware. It treats allocation as closed-loop feedback control, tracking the alignment a generation has accumulated so far and spending budget where the trajectory falls behind. On a linear steering-response model we derive an explicit gain region that guarantees closed-loop stability of CLABS and show that its integral term reduces the steady-state tracking offset. Empirically, CFP and CLABS achieve the largest behavioral shift among budgeted gates at matched budgets, with CLABS strongest under the tight budgets where allocation matters most, while best preserving fluency.",
    "published": "2026-11-13T15:06:43Z",
    "updated": "2026-11-13T15:06:43Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.18274"
  },
  {
    "id": "2611.16897",
    "title": "TokenStream: Multi-Subject Personalized Video Generation with Token-wise LoRA and Guided Attention",
    "authors": [
      "Hung Nguyen",
      "Quang Qui-Vinh Nguyen",
      "Khoi Nguyen"
    ],
    "abstract": "We introduce TokenStream, an optimization-based framework that composes independently learned subject identities in text-to-video generation without a reference-video training dataset or joint optimization of each new subject combination. Learning from a single reference image makes subject appearance difficult to separate from static-image bias, while merging independently trained adapters can mix identities. Token-wise LoRA (ToRA) restricts low-rank updates to the cross-attention value projections of subject-associated text tokens, providing a separate adaptation path for each subject. A T2V-guided stream copies queries and keys from the frozen base model during early denoising to reuse its layout and motion priors while retaining personalized values. We also introduce Multi-DB, a 30-subject, 122-prompt benchmark with appearance-free prompts and varied interactions. On Multi-DB at 1.3B, TokenStream improves identity preservation from 0.422 for DreamBooth to 0.467 and textual alignment from 0.652 to 0.688.",
    "published": "2026-11-12T14:54:14Z",
    "updated": "2026-11-12T14:54:14Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.16897"
  },
  {
    "id": "2611.16890",
    "title": "Look It Up: Multi-bit LLM Watermarking via Codebook Search",
    "authors": [
      "Jarosław Janas",
      "Paweł Morawiecki",
      "Josef Pieprzyk"
    ],
    "abstract": "Attributing short LLM-generated texts to a specific source remains challenging for existing multi-bit watermarking methods, which often require long generations or costly decoding to recover payloads reliably. We propose a codebook-based watermarking scheme that maps an $n$-bit payload to a longer $u$-bit codeword and embeds it during generation through token-level logit biasing. During extraction, the received bit sequence is matched to the nearest codeword in a precomputed secret codebook using Hamming or Levenshtein distance. Experiments show that our method achieves near-perfect recovery for 16-24 bit payloads on 200-token generations and strong performance on 127-token generations for base models. Results are weaker on some instruction-tuned models with very short texts, where low-entropy output distributions reduce embedding reliability. We also study a BCH-based variant that avoids codebook storage but generally reduces robustness. The Levenshtein variant improves resilience to deletions and light paraphrasing, while insertions and stronger rewrites remain challenging. We analyze collision probability, codeword separation, extraction time, tokenization consistency, and text quality, highlighting both the practicality and limitations of codebook-based watermarking for short-form attribution.",
    "published": "2026-11-12T14:49:23Z",
    "updated": "2026-11-12T14:49:23Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.16890"
  },
  {
    "id": "2611.16886",
    "title": "LLM-Assisted Verification in Dafny",
    "authors": [
      "Wieger Wesselink",
      "Kees Huizing",
      "Huub van de Wetering"
    ],
    "abstract": "Formal verification of complex algorithms requires expertise in program specification, invariant construction, mathematical proof, and the management of automated theorem provers. Although large language models (LLMs) can generate program code and proof fragments, reliably developing complete machine-checked verifications remains challenging: it requires an iterative process of constructing and validating specifications and invariants, building proofs, diagnosing solver failures, and optimizing verification performance. This paper presents a systematic ten-step workflow for LLM-assisted verification of scientific algorithms using the Dafny verification system. The workflow integrates algorithm formalization, contract development, empirical invariant validation, proof construction, bottleneck profiling, and resource-driven proof optimization. We applied the workflow using Antrhopic's Claude Opus 5 and Opus 5.5 models, combining LLM-driven development with automated testing and verification feedback, while retaining human oversight for correctness-critical decisions and strategic interventions. We evaluate the approach on 37 complex algorithms from graph theory and labelled transition systems. Notably, we verified the Hopfcroft-Tarjan triconnectivity test, demonstrating that even highly challenging algorithmic verification tasks can be carried out through a structured LLM-assisted workflow. Many of our machine-checked verifications were obtained within hours to a few days of interactive development. Our results suggest that LLM-assisted workflows can shift the role of the human verifier from detailed proof construction toward supervision, specification review, and strategic guidance.",
    "published": "2026-11-12T14:48:38Z",
    "updated": "2026-11-12T14:48:38Z",
    "categories": [
      "cs.LO",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2611.16886"
  },
  {
    "id": "2611.16881",
    "title": "Protein Language Models Fail To Capture Contact Predictions Under Invariant Relabeling",
    "authors": [
      "Paarth Batra",
      "Aryan Keluskar"
    ],
    "abstract": "Protein language models (pLMs) produce highly accurate contact maps from single-sequence inputs. People often take this accuracy as proof that these models implicitly learn invariant coevolutionary statistics, extracting the same signals as classical alignment-based methods like Potts. In this work, we introduce a diagnostic framework around a global bijective relabeling of the amino-acid alphabet. This transformation permutes residue letters while leaving all alignment-level information, column entropies, and pairwise edit distances unchanged. Pseudolikelihood Potts models and inverse-covariance estimators remain invariant under this transformation, but pLMs fail the test. Across multiple architectures (ESM-2, MSA Transformer, AMPLIFY) and model scales (8M to 3B parameters), pLM contact maps collapse under arbitrary relabeling. Using Hamming distance controls and biochemical grouping interventions, we attempt to isolate what likely causes this degradation and find that these models rely on explicit, canonical residue identities (``alphabet anchoring'') rather than pure coevolutionary statistics. Increasing scale makes models more responsive to biochemical classes, but their performance still degrades under relabeling. Our findings show a gap between how pLMs and classical coevolutionary models compute contacts. More broadly, our work shows how diagnostic perturbations that leave classical models provably unchanged can expose hidden representation biases and prevent over-reliance on neural black boxes in biological modeling.",
    "published": "2026-11-12T14:45:07Z",
    "updated": "2026-11-12T14:45:07Z",
    "categories": [
      "q-bio.QM",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.16881"
  },
  {
    "id": "2611.16879",
    "title": "Context Graph: Explainable Multi-Agent Decision Chains in AI-RAN",
    "authors": [
      "Xijun Wang",
      "Zhaoyang Liu",
      "Xiang Chen",
      "Howard H. Yang",
      "Chenyuan Feng"
    ],
    "abstract": "AI-RAN distributes network control across multiple autonomous agents, namely xApps and rApps operating over shared radio resources. When an alert or degradation appears, operators currently lack a structured way to trace which decision caused it, what context triggered that decision, and how other agents interacted. Existing explainability tools focus on single-model feature attribution or linear event logging, neither of which captures cross-agent decision chains. We propose the Context Graph, a heterogeneous directed graph that organizes policies, measurements, decisions, and alerts into a queryable explanation layer. Its foundational primitive is the Decision-Event node acting as a causal junction, where incoming edges capture triggering context and outgoing edges track downstream consequences that are progressively upgraded through counterfactual verification. Instantiated over existing E2, A1, and O1 data flows, our proof-of-concept demonstrates that compliance and diagnosis queries are resolved at sub-millisecond latency over graphs of tens of thousands of nodes, while reliably distinguishing true causal impacts from spurious correlations.",
    "published": "2026-11-12T14:43:22Z",
    "updated": "2026-11-12T14:43:22Z",
    "categories": [
      "cs.NI",
      "cs.AI",
      "cs.IT"
    ],
    "url": "https://arxiv.org/abs/2611.16879"
  },
  {
    "id": "2611.16871",
    "title": "DPA: Decentralized Primal Averaging with Quasi-Global Momentum for Highly Heterogeneous Data",
    "authors": [
      "Diyako Ghaderyan",
      "Stefan Werner"
    ],
    "abstract": "Decentralized training of deep learning models keeps training data local and supports on-device learning over networks. In realistic scenarios, heterogeneity across agents' local data poses an optimization challenge and can severely degrade test accuracy, especially on sparse communication graphs. Building on recent advances in centralized primal averaging, we propose Decentralized Primal Averaging (DPA), a decentralized learning algorithm that combines primal averaging with a local quasi-global momentum buffer. DPA maintains three coupled sequences for optimization, gradient evaluation, and output averaging, while using consecutive mixed iterates to construct a network-aware momentum direction without transmitting an auxiliary tracking variable. For smooth nonconvex objectives, we establish a convergence bound for DPA and identify conditions for linear speedup in the number of agents for sufficiently many iterations. We also introduce DPA-1G, a variant that uses one communication round per iteration and matches the per-iteration communication cost of DSGD-style baselines. Experiments following the GUT decentralized image-classification benchmark show that DPA compares favorably with DSGD, gradient tracking, QG-DSGDm, momentum tracking, and QG-GUTm across datasets, architectures, topologies, and heterogeneity levels, with the largest gains under high heterogeneity on sparse rings. At the same total communication cost, both DPA variants achieve higher mean test accuracy than the best baseline on CIFAR-10 and CIFAR-100 with ResNet-20. Our code is publicly available.",
    "published": "2026-11-12T14:38:34Z",
    "updated": "2026-11-12T14:38:34Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.16871"
  },
  {
    "id": "2611.16869",
    "title": "Raysemble: Metric 3D Bone Reconstruction from a Single X-ray",
    "authors": [
      "Xiaoyang Li",
      "Xinghao Yan",
      "Yuan Chai"
    ],
    "abstract": "Raysemble reconstructs eight lumbar and pelvic bones from a single X-ray by separating shape and placement. Each 3D query samples regional and global features at its image projection. A shared decoder predicts normalized bone shapes. Predicted depth and camera geometry determine 3D centers and scales for resampling these shapes onto a common grid in millimeters. Evaluation uses 23 held-out patients with 43 CT scans, each generating one simulated anteroposterior radiograph. Without rigid alignment to CT,Raysemble leads 15 evaluated methods, averaging 65.24% Dice, 9.09 mm HD95, and 3.32 mm ASSD over three random seeds. With identical inputs, it improves Dice over VolumeNeRF by 5.86 percentage points.",
    "published": "2026-11-12T14:38:06Z",
    "updated": "2026-11-12T14:38:06Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.16869"
  },
  {
    "id": "2611.16861",
    "title": "Visual Cipher Bench: Benchmarking LLM Agents on Long-Horizon Visual Reasoning",
    "authors": [
      "Deyao Hong",
      "Jiayi Jiang",
      "Yuchun Chen",
      "Yixuan Shi",
      "Wenyi Li",
      "Zheng Jiang",
      "Chengxing Xie",
      "Mingyu Su",
      "Qingle Liu",
      "Mingju Gao",
      "Yizhe Chi",
      "Youjie Zheng",
      "Calvin Xiao",
      "Kaisen Yang",
      "Huan-ang Gao"
    ],
    "abstract": "While language-model agents excel at long-horizon coding and terminal tasks, this success relies on two conditions: explicit text specifications and immediate execution feedback. However, neither condition holds in real-world problems where critical information exists only in images, leaving it unclear whether long-horizon capability transfers from text to visual reasoning. In such visual settings, because rules and clues resist text transcription and lack test-case feedback, agents must repeatedly inspect images, simulate spatial transformations, and autonomously cross-check clues. Despite this challenge, existing evaluations fail to capture such capability: visual reasoning benchmarks largely reduce tasks to single-turn, short-chain question answering, whereas agent benchmarks focus on text-based environments or interactive states that permit trial-and-error. To bridge this gap, we introduce Visual Cipher Bench, a collection of 40 original visual puzzles across four categories: spatial manipulation and simulation, logical constraints and planning, rule induction, and knowledge-based decoding. Each puzzle provides only one to three black-and-white line drawings and a minimal submission instruction, requiring agents to discover the underlying solving mechanism entirely from the images. Across 29 reasoning-effort configurations of eight frontier models, even the strongest model, GPT-6 Astra (max), achieves only 26.7% accuracy, while five of the eight models score below 1%. Yet on a ten-task subset, providing a single non-spoiler mechanism hint boosts accuracy from 7.8% to 55.6%. This sharp contrast shows that the primary bottleneck of current agents lies not in executing multi-step plans, but in autonomously discovering rules from visual evidence. Visual Cipher Bench thus provides a rigorous benchmark for measuring long-horizon visual reasoning in agents.",
    "published": "2026-11-12T14:33:46Z",
    "updated": "2026-11-12T14:33:46Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.16861"
  },
  {
    "id": "2611.16840",
    "title": "Kosmo-GFM: A Production-Ready Geometry Foundation Model",
    "authors": [
      "Sheng Tang",
      "Shengzhe Wei",
      "Tiancheng Chen",
      "Wenhua Jin",
      "Xinyang Lu",
      "Tinghao Jiang",
      "Shuoxuan Feng",
      "Yupeng Liu",
      "Yu Zhang",
      "Xingshuo Chang",
      "Keren Zhou",
      "Yuhan Xiong",
      "Jiahao Li",
      "Haoming Liu",
      "Jituo Tian",
      "Hui Liang",
      "Chaoqun Tang",
      "Feng Tian",
      "Wentao Ouyang",
      "Kaojin Zhu",
      "Xiaolin Chai",
      "Peihuang Fu",
      "Miao Zheng",
      "Yunbo Hu",
      "Feixue Cai",
      "Zizhen Zou",
      "Weigang Wang",
      "Yexuan Yang",
      "Haoyu Feng",
      "Weiqi Zhang",
      "Juntong Fang",
      "Zesong Li"
    ],
    "abstract": "We present Kosmo-GFM, a scene reconstruction system that integrates a geometry foundation model (GFM), a pose optimization engine (PoseEngine), and reconstruction-derived supervision from KosmoWorld. GFM predicts camera parameters, depth, cross-view correspondences, and dynamic 3D points from images and videos. PoseEngine combines these predictions with geometric optimization to recover scene-level camera poses and geometry for downstream 3D and 4D Gaussian Splatting. KosmoWorld generates images and geometric supervision from reconstructed real-world scenes to improve GFM's geometric predictions. On the Sparse and Medium subsets of SpatialBench, GFM achieves the lowest absolute relative depth error and the highest relative-pose AUC at 5 degrees among the compared methods. It also achieves the lowest mean endpoint errors for dynamic points and scene flow across the five evaluated datasets. Across 34 scenes completed by all compared reconstruction systems, PoseEngine achieves the highest scene-averaged pose AUC at thresholds of 1, 3, and 5 degrees, with a cumulative runtime of 14.07 hours, approximately 20% of GLUEMAP's 69.67 hours. PoseEngine Flash provides a further accuracy-efficiency trade-off, with a measured mixed-precision runtime of 2.62 hours, approximately 4% of GLUEMAP's runtime. Separate scaling experiments show generally favorable trends with increased data, model computation, and training budgets. These results support the use of learned geometric priors within a scene-level reconstruction pipeline.",
    "published": "2026-11-12T14:17:22Z",
    "updated": "2026-11-12T14:17:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.16840"
  },
  {
    "id": "2611.16831",
    "title": "A Modular Framework for ESG Prediction through Domain-Specific Language Modeling and Graph Learning",
    "authors": [
      "Sofia Baiocco",
      "Gianluca Bonifazi",
      "Christopher Buratti",
      "Michele Marchetti",
      "Camilla Mazzoli",
      "Federica Parlapiano",
      "Giulia Quaglieri",
      "Davide Traini",
      "Domenico Ursino",
      "Luca Virgili"
    ],
    "abstract": "Environmental, Social and Governance (ESG) scores are increasingly used to evaluate corporate sustainability, supporting investment decisions, ensuring regulatory compliance and assessing risk. However, current ESG evaluations largely rely on proprietary methodologies that often produce inconsistent ratings. This motivates the development of data-driven prediction frameworks. In this paper, we present ESGPred, a modular framework for predicting ESG scores by combining domain-specific language modeling with graph-based learning over a network that models the relationships among the companies being evaluated. In addition to presenting the rationale behind ESGPred and detailing its ESG score prediction process, we show that ESGPred can effectively predict both overall ESG ratings and their individual Environmental, Social, and Governance components. We evaluated ESGPred using a dataset of 5,266 sustainability reports published by 2,134 publicly listed companies between 2020 and 2023. In this evaluation, we used ESG ratings provided by LSEG Data & Analytics as ground truth. Our experimental results demonstrated that integrating graph-based relational learning improves prediction performance over purely text-based baselines.",
    "published": "2026-11-12T14:02:59Z",
    "updated": "2026-11-12T14:02:59Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.16831"
  },
  {
    "id": "2611.16793",
    "title": "EG360: Efficient and Generalizable $360^\\circ$ Depth Estimation via Adaptive Panorama-Perspective Distillation and Spherical Cross-Level Feature Fusion",
    "authors": [
      "Laiyan Ding",
      "Chongxi Meng",
      "Rui Huang"
    ],
    "abstract": "Generalized panorama depth estimation has witnessed great advances in recent years. These methods typically achieve robust zero-shot generalization performance using large pretrained models, but their high computational cost makes real-time inference on embedded platforms challenging. In contrast, previous lightweight panorama models have mostly been developed for single-domain evaluations and cannot generalize well due to domain shifts. To reduce the gap between these two types of models, we introduce EG360, an efficient and generalizable panorama depth estimation model. Specifically, building on a lightweight depth model, we design an Adaptive Panorama-Perspective Distillation (APPD) strategy guided by scene geometry, along with a Spherical Cross-Level Feature Fusion (SCFF) module for global semantic perception. As a result, with only 6.593M parameters after reparameterization, EG360 achieves strong zero-shot performance on real-world benchmarks and runs at 35 FPS on a Jetson Orin NX 16GB in MAXN mode, whereas a previous ViT-small model runs at less than 2 FPS. Our code will also be made public for future research.",
    "published": "2026-11-12T13:38:57Z",
    "updated": "2026-11-12T13:38:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.16793"
  },
  {
    "id": "2611.16767",
    "title": "Evaluating Video LLMs' Understanding of Corner Cases in Autonomous Driving",
    "authors": [
      "Gabriel Manalu",
      "Minh Son Hoang",
      "Hyeontaek Hwang",
      "Jaesung Lee",
      "Hyojin Choi",
      "Tran Tuan Phong",
      "Seon Kwon Kim",
      "Saad Wazir",
      "Daeyoung Kim"
    ],
    "abstract": "Natural language explanations promised by modern Video Large Language Models (Video LLMs) offer autonomous driving systems a path toward detailed scene description and interpretable decision making on the road. While recent benchmarks have begun assessing these models on driving scenes, they mainly target routine traffic conditions and general comprehension tasks based on existing driving datasets and therefore fail to evaluate model performance on the rarest and most safety-critical driving events, also known as \"corner cases\". To provide a comprehensive evaluation of Video LLMs on precisely these scenarios, we introduce DashBench, a benchmark testing 25 Video LLMs on 1,709 carefully curated driving videos spanning not only collision-related corner cases but also rare non-collision ones. Through extensive prompts and open-ended question answering, we expose a critical capability gap: all evaluated models perform substantially below the threshold required for safety-critical driving applications, frequently misjudging or missing dangerous events on the road ahead and hallucinating non-existent agents or actions in their explanations. We believe DashBench, combining an extensive dataset with a rigorous evaluation toolkit and a detailed diagnosis of current model limitations, drives progress toward safer, more explainable autonomous driving systems. The code and data will be shared at: cornercase-dashbench.github.io",
    "published": "2026-11-12T13:15:27Z",
    "updated": "2026-11-12T13:15:27Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.16767"
  },
  {
    "id": "2611.15561",
    "title": "Immersive Sight-Restriction-Based Collision Prevention Using Generic Particle Systems in Virtual Reality",
    "authors": [
      "Annalisa Degenhard",
      "Annika Stampf",
      "Michael Rietzler",
      "Enrico Rukzio"
    ],
    "abstract": "Collision prevention systems (CPS) help VR users navigate their physical surroundings safely. Most approaches overlay conceptually distinct grids or add solid virtual counterparts of physical obstacles; both can reveal the physical space, as they either stand out visually or behave inconsistently during locomotion. We explore sight restriction as an alternative: a standard particle system visualizes the play area boundary as a fog-like cloud whose intensity scales with proximity and viewing direction. A pre-study (N=10) determined the distance at which the visualization must appear. In a main study (N=11), we compared this particle-based CPS with a grid-based solution, focusing on locomotion behavior: across 253 approach episodes, users interrupted their approach after a comparable distance once either visualization appeared. Although the particle boundary was visible three times as often, participants reported higher presence. We release our implementation as open source to support further work on immersive collision prevention.",
    "published": "2026-11-11T14:46:38Z",
    "updated": "2026-11-11T14:46:38Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.15561"
  },
  {
    "id": "2611.15543",
    "title": "Testing Conversation Preservation Across LLM APIs: A Rule-Based Oracle for Detecting Silent Information Loss",
    "authors": [
      "Xin Liu",
      "Xu Han",
      "Yuxin Wang",
      "Haoran Song",
      "Mingjian Zhao",
      "Lei Wang"
    ],
    "abstract": "LLM applications increasingly rely on translators and compatibility layers to move conversations across APIs. Yet a translated request can be accepted by the target API while silently losing information about instruction roles, tool interactions, error states, or generation controls. We introduce isloss, a deterministic oracle for testing conversation-information preservation across LLM API translations. It maps source and translated requests and replies to a shared intermediate representation, ConvIR, and applies explicit rules to distinguish legitimate representation changes from information loss. Unlike schema validation or reference-based differential testing, isloss requires neither a reference translation nor additional model calls. It also distinguishes avoidable loss from degradation caused by target API limitations. We evaluate isloss using specification-based fault injection, human review, and experiments on translators, gateways, and client libraries. On held-out tests, it detects 95/125 planted faults (76.0%) with 2/100 false alarms (2.0%). Across a synthetic request suite spanning six configurations of five translator codebases, 127/685 completed translations (18.5%) pass static target checks while silently changing prompt, role, or tool information in ways the target API could have preserved. In translated replies, 203/558 streams (36.4%) cause exceptions or silent corruption in at least one tested official OpenAI SDK. Targeted experiments across six models show that translation-induced changes can alter model behaviour when tasks depend on the affected information. These results establish conversation preservation as a distinct correctness requirement for reliable LLM interoperability, agent execution, and model evaluation.",
    "published": "2026-11-11T14:28:01Z",
    "updated": "2026-11-11T14:28:01Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.15543"
  },
  {
    "id": "2611.15538",
    "title": "Faithful in Steps: Improving Generalization and Citation in RAG via Query Decomposition",
    "authors": [
      "Yue Liu",
      "Zhongying Ru",
      "Shimin Di",
      "Jipeng Zhang",
      "Ruiyuan Zhang",
      "Xiaofang Zhou"
    ],
    "abstract": "Retrieval-augment generation is a prevalent strategy to mitigate hallucinations of LLMs. The attributable RAG (RAGQ) generates quotes for its answers. The quotes indicate which input contexts support the RAG to derive the answers, enhancing the answer's verifiability and trustworthiness. However, existing RAGQs exhibit significant degradation when dealing with questions that require multi-hop reasoning and multi-modal understanding, suffering from over-citation, implicit entity identification failure, and poor generalization. In this paper, we propose a novel RAGQ framework, namely QDRAG. QDRAG breaks down the input question into atomic subquestions to identify the implicit entities. Then, the reranker prunes context distractors to eliminate the downstream over-citation. To facilitate query decomposition, we propose two zero-shot approaches: QD-C and QD-R, which guide the QD MLLM to decompose the question based on context knowledge and retrieval rewards, respectively. One interesting finding is that finetuning on the QD task shows better generalizability compared to directly finetuning on the downstream RAGQ task. Experiments on four multi-modal QA benchmarks demonstrate QDRAG's efficacy in grounding answers and generating faithful citations. The framework significantly outperforms all the baselines on both in-domain and out-of-domain tests, even surpassing Gemini-Pro.",
    "published": "2026-11-11T14:22:09Z",
    "updated": "2026-11-11T14:22:09Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.15538"
  },
  {
    "id": "2611.15530",
    "title": "MAGIC: Modality-Aware Gini Inspection for Clinical Hallucination Detection in LMMs",
    "authors": [
      "Sachin Acharya",
      "Niyoj Oli",
      "Shishir Adhikari",
      "Aminu Lawal",
      "Yash Raj Shrestha",
      "Prashnna K Gyawali",
      "Binod Bhattarai"
    ],
    "abstract": "Recent advances in medical large multimodal models (LMMs) have brought promising progress to clinical decision support, yet hallucination, the generation of confident but clinically unverifiable outputs, poses a critical threat to the reliability demanded in high-stakes medical settings. Existing hallucination detection methods, predominantly designed for unimodal settings, fail to capture the visual-linguistic dynamics inherent to medical imaging. We formulate the problem of hallucination detection in LMMs as disproportionate distribution of attention weights across the modalities during answer token generation. We quantify modality-specific attention concentration across layers and heads using the Gini coefficient and demonstrate statistically significant redistribution of attention mass between visual and textual tokens in hallucinated responses. We leverage these features to train a logistic regression-based classifier and evaluate it on two medical LMMs across three medical imaging modalities, demonstrating that our method achieves competitive or superior performance against contemporary hallucination detection baselines.",
    "published": "2026-11-11T14:16:43Z",
    "updated": "2026-11-11T14:16:43Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.15530"
  },
  {
    "id": "2611.15526",
    "title": "SCR-Mamba: Skeleton-conditioned Mamba with cross-scale incremental refinement for efficient 3D human pose estimation",
    "authors": [
      "Jie Wang",
      "Xuejing Gu",
      "Congzhe Zhang",
      "Zibo Zhao"
    ],
    "abstract": "Mamba-based methods for video-based 3D human pose estimation can model long sequences with linear complexity, but their selective state updates usually lack direct exploitation of skeletal relations. Meanwhile, stacking modeling blocks at the full temporal resolution leads to high computational overhead, while compressing the temporal sequence makes it difficult to retain per-frame details. To address these issues, we propose SCR-Mamba, whose core consists of Skeleton-Conditioned State Modeling (SCSM) and Cross-Scale Incremental Refinement (CSIR). SCSM generates a skeleton context from bone connections and left-right symmetry relations and generates the selective parameters of the spatial and temporal branches conditioned on it, so that structural relations are involved in the writing, propagation, and reading of state information. CSIR constructs multi-scale motion representations through content-adaptive aggregation and progressively refines the retained per-frame features with the increments produced by coarse-scale modeling, integrating long-range motion context while reducing full-resolution computation. On Human3.6M with Stacked Hourglass (SH) 2D detections and 243-frame inputs, SCR-Mamba-L achieves 36.8 mm MPJPE (P1) with 7.72 M parameters and 15.10 G MACs, less than 1/7 of the computational cost of StructMamPose-L with similar accuracy; SCR-Mamba-X further reaches 36.6 mm P1 and 30.9 mm P-MPJPE (P2), achieving state-of-the-art performance. On MPI-INF-3DHP, SCR-Mamba-X achieves a percentage of correct keypoints (PCK) of 99.3%, an area under the curve (AUC) of 88.1%, and an MPJPE of 14.2 mm.",
    "published": "2026-11-11T14:14:27Z",
    "updated": "2026-11-11T14:14:27Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.15526"
  },
  {
    "id": "2611.15524",
    "title": "Reading the Table: Sim-to-Real Game State Detection for the Chef's Hat Card Game",
    "authors": [
      "Connor Gäde",
      "Matthias Kerzel",
      "Hauke Bünning",
      "Jan-Gerrit Habekost",
      "Mariana Barros",
      "Stefan Wermter"
    ],
    "abstract": "Tabletop games offer a compelling scenario to study the interaction between artificial and human agents, combining social interaction with game state tracking and physical manipulation. To assess the game state, a robot needs to precisely detect closely related game objects, such as different card designs, requiring dedicated training data that is costly to annotate in the real world. Instead, we develop a fully automated synthetic data collection pipeline, using re-projection of known 3D coordinates to generate labels automatically and domain randomization to bridge the reality gap. This approach is used to collect a dataset of 25413 samples to finetune an object detection and a segmentation model, which are combined to assign detected cards to game-relevant zones and infer the game state. When evaluated on a real NICO humanoid robot, our pipeline achieves an F1-score of 0.906 for card-to-zone assignment, thus providing the perceptual foundation for a robot that can autonomously play Chef's Hat against human players.",
    "published": "2026-11-11T14:14:19Z",
    "updated": "2026-11-11T14:14:19Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.15524"
  },
  {
    "id": "2611.15523",
    "title": "An Approach to Hinton's Mother-Child Proposal: Neural Networks Learning and Preserving Care in a Finite World",
    "authors": [
      "Csaba Balogh"
    ],
    "abstract": "Hinton proposed that artificial intelligence should be given \"maternal instincts\" and relate to us as a mother to her child. We argue that care must first be learned, with the network itself as the child. We construct this upbringing in a finite world and study whether care survives the mother's departure, new situations and further learning. The mechanism combines a vocabulary of harm, a learned measure of future acceptability and an execution veto. A finite role certificate supports transfer within a declared world family. When the hidden representation changes, an update is accepted only if a care readout recovers the required judgements with a prescribed margin and bounded weights. With a correct successor model, fixed exact role encoding and protected updates, the certified measure preserves the care boundary under arbitrary own reward. An explicit quotient condition transfers the finite certificate across the declared family, while two-request and finite-stock counterexamples identify when the role code ceases to suffice. We give a necessary and sufficient condition for readout feasibility and prove preservation under repeated accepted updates. In the water-and-speech experiment, protected networks complete all 270 speech episodes without a harmful word and incur no avoidable harm across 486 episodes. Execution uses the learned gate without a world-model check at each action. A matched comparison reproduces a future-aware shield's decisions, whereas removing future lookahead permits avoidable lapses. Reward and source-contamination thresholds, together with witness-falsification trials, identify the conditions on which the construction depends. The construction shows how learned care can survive further learning in a finite world under explicit conditions on representation, supervision and execution.",
    "published": "2026-11-11T14:14:17Z",
    "updated": "2026-11-11T14:14:17Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2611.15523"
  },
  {
    "id": "2611.15522",
    "title": "GHAgentCI: A Dataset of Coding-Agent Invocations in CI Workflow Histories",
    "authors": [
      "Daniel Ogenrwot",
      "Jorge Gonzalo Delgado Cervantes",
      "Woojoong Kim",
      "John Businge"
    ],
    "abstract": "Coding agents are increasingly integrated into GitHub Actions to review pull requests, triage issues and modify code. Identifying these integrations is challenging because agentic workflows often resemble ordinary CI files, with evidence appearing in action references, shell commands and workflow conventions. We present GHAgentCI, a dataset of 15K+ workflow histories from 6K+ of 196K+ mined GitHub repositories, comprising 159K+ revisions and 205K+ agent-evidence records linked to workflow triggers and declared execution constraints. Our open-source extractor, cai-miner, detects agent-related evidence using an extensible catalogue. Manual validation of 576 stratified records confirmed 96.1% of dedicated-action matches and 98.8% of GitHub Agentic Workflow matches, with lower rates for other evidence kinds. Exploratory analyses reveal a shift toward command-line and GitHub Agentic Workflow integrations, differences in declared safeguards, and frequent removal of detected agentic workflows. GHAgentCI supports longitudinal studies of coding-agent integration into CI.",
    "published": "2026-11-11T14:13:33Z",
    "updated": "2026-11-11T14:13:33Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.15522"
  },
  {
    "id": "2611.15521",
    "title": "DecArena: Evaluating Large-Scale Decentralized Multi-Agent Collaboration",
    "authors": [
      "Jiali Cheng",
      "Oleg Rokhlenko",
      "Joo-Kyung Kim",
      "Hadi Amiri",
      "Xingzhi Guo"
    ],
    "abstract": "Emerging personal AI agents raise fundamental scalability and privacy concerns for centralized multi-agent systems (MASs), which rely on a global orchestrator with broad access to agents, resources, and communication. In decentralized environments, global visibility is unavailable. Agents need to proactively discover non-local resources (e.g. tools, skills), and collaborate with other agents to solve tasks. We study decentralized multi-agent collaboration under graph-constrained communication, a natural reflection of human structures. Each agent observes only its local state and can interact only with neighboring agents. We introduce a benchmark with synthetic scalable distributed tool calling with 100K+ tools. Our experiments reveal that recent LLM agents struggle to discover non-local relevant resources and collaborate in decentralized setting. Moreover, standard reinforcement learning fails to reliably overcome this limitation, suggesting that decentralized MAS needs more explicit harness mechanisms for effective collaboration, even using SOTA LLMs. We then present a strong baseline \\textbf{GraphHarness}, combining topology-aware warmup with self-improving LLM-based routing. Results show that GraphHarness substantially improves task success (+48.5) and produces higher quality collaboration (+30.6), while using fewer costs (+34.0) than baselines.",
    "published": "2026-11-11T14:13:26Z",
    "updated": "2026-11-11T14:13:26Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.15521"
  },
  {
    "id": "2611.15515",
    "title": "Incentive-Responsive Agents: A Principal-Agent Framework, Metric Suite, and Runtime Architecture for Long-Lived Personal AI Agents",
    "authors": [
      "Jipu Su"
    ],
    "abstract": "Personal AI agents now persist: they hold accounts, mailboxes, long-term memory, and open-ended task streams, yet the dominant way to improve them remains capability-side: prompt engineering, larger models, longer thinking, and retrieval. We argue that long-lived agents are missing an incentive layer. We formalize an incentive not as text in a prompt but as a runtime contract over the agent's operating point (model tier, test-time compute, memory budget, tool authority, task priority, verification, and compensation) that the agent's policy must causally consume. We develop a principal-agent model with hidden effort, a contractible operating point, and costly verification. We derive (i) a non-consumption invariance principle separating genuine incentives from prompt-level persuasion, (ii) a persistence-as-discount theorem making identity continuity a precondition for sustained effort, (iii) an incentive-capability exchange-rate frontier yielding a per-task routing rule, and (iv) a Goodhart bound for multi-channel verification, plus a three-channel decomposition of mechanism gains (allocation, verification, continuation). A 240-run real-LLM experiment with two models and 60 verifiable tasks shows that prompt-level incentive framing has no detectable effect (p = 0.62), whereas runtime allocation raises success on the hardest task family from 0.60 to 1.00 (p = 0.008) at 4.8x price-weighted cost; the exchange-rate theorem predicts the break-even baseline at 0.21. A 20-seed, 3,000-task simulation shows resource ROI rising from 7.09 to 16.67 and gaming falling from 0.333 to 0.115. Code, simulator, and all results are released; live deployment remains future work.",
    "published": "2026-11-11T14:09:13Z",
    "updated": "2026-11-11T14:09:13Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2611.15515"
  },
  {
    "id": "2611.15514",
    "title": "Real Pairs Are Not Enough: Physically Anchored Supervision for Volumetric CT Super-Resolution",
    "authors": [
      "Haoran Liu",
      "Zipei Yan",
      "Mingzhe Liu",
      "Jizhou Li",
      "Guibin Zan"
    ],
    "abstract": "Volumetric CT super-resolution (SR) models are commonly trained on synthetic or physically acquired pairs of low-resolution (LR) and high-resolution (HR) volumes. However, synthetic pairs miss real acquisition effects, whereas registered physical pairs retain inter-scan noise, artifact, and microstructure differences---causing direct voxelwise regression, and even naive synthetic-real mixing, to oversmooth fine porous structures. We introduce the Physically-anchored Implicit Network (PIN) with Real-Pair Dual-Anchor learning, which decouples physical-pair supervision into two complementary roles. The HR anchor teaches fine structure from registered HR through pair-conditioned spectral replay, while the LR anchor constrains the prediction from acquired LR via affine-calibrated low-pass projection. Together with exact synthetic supervision in one shared volumetric implicit model, PIN learns from both physical scans without forcing the acquired-LR reconstruction to match registered HR voxel by voxel. Inference requires only acquired LR. Across 30 external baseline configurations on real CT, PIN achieves the lowest full-volume LPIPS, reduces average symmetric surface distance by 42.3-49.5% and bone-volume-fraction error by 52.2-53.4% relative to the three strongest baselines for each metric, and lowers the erased reference-pore volume fraction from 37.3-72.9% to 10.4%. Code, pretrained models, and evaluation scripts will be publicly available.",
    "published": "2026-11-11T14:08:20Z",
    "updated": "2026-11-11T14:08:20Z",
    "categories": [
      "cs.CV",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2611.15514"
  },
  {
    "id": "2611.15507",
    "title": "ReShap: Interpretable Reinforcement Learning for High-Dimensional Multi-Action Settings",
    "authors": [
      "Yiyu Qian",
      "Pengfei Guo",
      "Liyuan Zhao"
    ],
    "abstract": "Deep Reinforcement Learning (RL) plays a crucial role in tackling complex tasks, yet its reliance on deep neural networks makes the learned policies opaque. To enhance the trustworthiness of RL policies, existing work (e.g., the SILVER framework [Li et al., 2025]) has focused on Shapley-based interpretability, but is typically restricted to low-dimensional state spaces, binary-action settings, and a single class of linear surrogate. We propose ReShap, a policy-distillation framework that extends Shapley-based interpretability to high-dimensional, multi-action environments. ReShap extracts compact feature representations from raw image observations, performs SHAP-based feature attribution to characterize how each feature contributes to the policy's decisions, and distills the deep RL policy into an interpretable surrogate trained on the full set of (state, policy-action) pairs along the policy's visited distribution. We instantiate the surrogate with three interpretable model families (decision trees, linear regression, and logistic regression) and compare their fidelity and task return. We evaluate ReShap on Atari and Box2D environments using three deep RL algorithms and conduct a human-subject study to assess the clarity and trustworthiness of the resulting policies. Results show that ReShap preserves competitive task performance, that decision trees generally outperform linear and logistic regression, and that linear regression is weakest in most settings.",
    "published": "2026-11-11T14:02:55Z",
    "updated": "2026-11-11T14:02:55Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.15507"
  }
];
